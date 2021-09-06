from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from .models import *

from hurry.filesize import size
from rest_framework.views import APIView
from rest_framework.response import Response
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from datetime import datetime, timezone
import boto3
from botocore.client import Config
from botocore.exceptions import ClientError
from django.conf import settings

# Create your views here
MINUTES_TO_EXPIRY = 90
MAX_ROOM_FILE_SIZE = 500 * 1024 * 1024

def space_left(room):

    s3_client = boto3.client('s3', 
    aws_access_key_id = settings.AWS_ACCESS_KEY_ID, 
    aws_secret_access_key = settings.AWS_SECRET_ACCESS_KEY, 
    config=Config(signature_version='s3v4'),
    region_name = settings.AWS_S3_REGION_NAME)


    files = File.objects.filter(room = room)
    size_of_files = 0

    response_contents = s3_client.list_objects_v2(
        Prefix = str(room.code) + '/',
        Bucket = settings.AWS_STORAGE_BUCKET_NAME
        ).get('Contents')

    if (response_contents):
        for i in response_contents:
            size_of_files += i['Size']
            
        return  MAX_ROOM_FILE_SIZE - size_of_files if MAX_ROOM_FILE_SIZE - size_of_files > 0 else 0
    else:
        return MAX_ROOM_FILE_SIZE
     
def is_space_available(room, received_file):    

    remaining_space = space_left(room)
    
    if received_file.size > remaining_space:
        return False, size(remaining_space)

    else:
        return True, size(remaining_space)
    
def expired(created_at):
    now = datetime.now(timezone.utc)
    minutes = (now - created_at).seconds//60
    if minutes >= MINUTES_TO_EXPIRY:
        return True

    else:
        return False

def time_left(created_at):
    now = datetime.now(timezone.utc)
    seconds_left = 60*MINUTES_TO_EXPIRY - (now - created_at).seconds
    return seconds_left

def send_channel_message(group_name, type_of_message, message):

    group_name = 'room_%s' % group_name
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(group_name, 
    {
        "type": type_of_message,
        'message': message
    })

def create_presigned_url(object_name, bucket_name = settings.AWS_STORAGE_BUCKET_NAME, expiration = MINUTES_TO_EXPIRY*60):
    
    """Generate a presigned URL to share an S3 object

    :param bucket_name: string
    :param object_name: string
    :param expiration: Time in seconds for the presigned URL to remain valid
    :return: Presigned URL as string. If error, returns None.
    """
  
    # Generate a presigned URL for the S3 object
    s3_client = boto3.client('s3', 
    aws_access_key_id = settings.AWS_ACCESS_KEY_ID, 
    aws_secret_access_key = settings.AWS_SECRET_ACCESS_KEY, 
    config=Config(signature_version='s3v4'),
    region_name = settings.AWS_S3_REGION_NAME)
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name,
                                                            'Key': object_name,
                                                            'ResponseContentDisposition': f"attachment; filename = {object_name}"},
                                                    ExpiresIn = expiration)
    except ClientError as e:
        print(e)
        return None

    # The response contains the presigned URL
    return response



class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class GuestView(generics.ListAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

class FileView(generics.ListAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer


class CreateRoomView(APIView):
    serializer_class = RoomSerializer
   
    def get(self, request, format=None):
        
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        data = self.serializer_class(data = request.data)
        if data.is_valid():

            host = self.request.session.session_key
            queryset = Room.objects.filter(host = host)

            #Checks if the person creating the room is already the host of a room
            if queryset.exists():
                room = queryset[0]

                if expired(room.created_at):
                    room.delete()
                else:
                    data = {"already_host": str(room)}
                    return Response(data, status = status.HTTP_200_OK)
            
            room = Room(host = host)
            room.save()

            guest = Guest.objects.filter(guest = host)

            if guest.exists():
                guest = guest[0]
                send_channel_message(str(guest.room), "member_left", guest.name)
                guest.delete()

            guest = Guest(guest = host, is_host = True, room = room)
            guest.save()
            return Response(self.serializer_class(room).data, status = status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class JoinRoom(APIView):

    serializer_class = GuestSerializer
    lookup_url_kwargs = 'code'

    def get(self, request, format = None):
        
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()


        guest_session = self.request.session.session_key
        code = request.GET.get(self.lookup_url_kwargs)

        if code != None:      
            
            queryset_room = Room.objects.filter(code = code)
            queryset_guest = Guest.objects.filter(guest = guest_session)

            if queryset_room.exists():
                
                #Checks if the room has expired
                if expired(queryset_room[0].created_at):
                    room = queryset_room[0]
                    room.delete()
                    return Response({'Room Expired': 'The Room Will Soon be Deleted', 'status': 301}, status=status.HTTP_301_MOVED_PERMANENTLY)
                
                #Checks if the given room exists and is unlocked
                elif not queryset_room[0].is_locked:
                    
                    room = queryset_room[0]

                    #checks if the guest is already part of a room
                    if queryset_guest.exists():
                        guest = queryset_guest[0]
                        
                        #If the guest is the host of a room other than the given room
                        if guest.is_host == True and guest.room != room:
                            if expired(guest.room.created_at):
                                temp_room = guest.room
                                temp_room.delete()
                            else:
                                return Response({"already_host": str(guest.room)}, status = status.HTTP_200_OK)
                        
                        #this is done if the guest is already part of the given room
                        elif guest.room == room:
                            data = self.serializer_class(guest).data
                            data['is_locked'] = False
                            return Response(data, status = status.HTTP_200_OK)

                        
                        #This is done if the guest was part of a different room previously, but not as a host. So we remove them 
                        send_channel_message(str(guest.room), "member_left", guest.name)
                        guest.delete()
                    
                    
                    guest = Guest(room = room, guest = guest_session)
                    guest.save()

                    data = self.serializer_class(guest).data
                    data["is_locked"] = False

                    #This is returned when the guest was not part of a room, but now is OR if he was part of a room previously, it was deleted
                    return Response(data, status = status.HTTP_200_OK)

                elif queryset_room[0].is_locked:
                    
                    room = queryset_room[0]
                    if queryset_guest.exists():
                        guest = queryset_guest[0]
                        data = self.serializer_class(guest).data
                        data["is_locked"] = True
                        
                        #If the guest is the host of other room, that room is returned
                        if guest.is_host == True and guest.room != room:
                            return Response({"already_host": str(guest.room)}, status = status.HTTP_200_OK)

                        elif guest.room == room:
                            return Response(data, status = status.HTTP_200_OK)

                    return Response({'Locked Room': 'This Room has been locked by the host', 'status': 403}, status = status.HTTP_403_FORBIDDEN)
                    
                #Returned when an invalid room code is entered
            return Response({'Room Not Found': 'Invalid Room Code.', 'status': 404}, status=status.HTTP_404_NOT_FOUND)
            
        #Returned when no code is entered
        return Response({'Bad Request': 'Invalid data...', 'status': 400}, status=status.HTTP_400_BAD_REQUEST)

class GetMembers(APIView):
    serializer_class = GuestSerializer

    def get(self, request, format = None):
        
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()


        guest_session = self.request.session.session_key
        room = Guest.objects.filter(guest = guest_session)

        if room.exists():
            room = room[0].room
            names = []

            guests = Guest.objects.filter(room = room)

            for i in range(len(guests)):
                name = guests[i].name
                names.append(name)

            return Response({"members": names}, status = status.HTTP_200_OK)
        
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class GetTimeLeft(APIView):
 
    def get(self, request, format = None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        guest_session = self.request.session.session_key
        guest = Guest.objects.filter(guest = guest_session)

        if guest.exists():
            guest = guest[0]

            return Response({"time": time_left(guest.room.created_at)}, status = status.HTTP_200_OK)

        return Response({"Bad Request": "Invalid Data"}, status = status.HTTP_400_BAD_REQUEST)
    
class GetFiles(APIView):

    def get(self, request, format = None):

        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        guest_session = self.request.session.session_key

        guest = Guest.objects.filter(guest = guest_session)

        if guest.exists():
            guest = guest[0]
        else:
            return Response({"Bad Request": "Invalid Data..."}, status = status.HTTP_400_BAD_REQUEST)

        room = guest.room

        file_field = File.objects.filter(room = room)
        data = []
        if file_field.exists():
            for x in range(len(file_field)):
                data.append({"file_url": file_field[x].downloadURL, "file_name": file_field[x].roomFile.name[8:]})
            
            return Response({"files": data}, status = status.HTTP_200_OK)
        
        return Response({"files": data}, status = status.HTTP_200_OK)


class UpdateIsLocked(APIView):

    serializer_class = UpdateIsLockedSerializer

    def get(self, request, format = None):
        
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        host_session = self.request.session.session_key

        room = Room.objects.filter(host = host_session)

        if room.exists():
            room = room[0]
            
            room.is_locked = not room.is_locked
            room.save(update_fields = ['is_locked'])


            send_channel_message(room.code, "lock_change", room.is_locked)
            return Response({'Updated': 'is_locked'}, status = status.HTTP_200_OK)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class UpdateName(APIView):

    serializer_class = UpdateNameSerializer

    def post(self, request, format = None):
        
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        guest_session = self.request.session.session_key

        flag = False

        data = self.serializer_class(data = request.data)
        if data.is_valid():
            
            
            guest = Guest.objects.filter(guest = guest_session)
            if guest.exists():
                guest = guest[0]
            else:
                return Response({'bad_request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
                

            code = str(guest.room)

            room = Room.objects.filter(code = code)

            if room.exists():
                room = room[0]
                if expired(room.created_at):
                    return Response({'expired': 'Room Expired'}, status=status.HTTP_301_MOVED_PERMANENTLY)
            else:
                return Response({'bad_request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

            others = Guest.objects.filter(room = room)

            name = data.data.get('name')
            
            for x in range(len(others)):
                if others[x].guest == guest_session:
                    continue

                if others[x].name == name:
                    flag = True
                    break
        
            if flag:
                return Response({'same_name': 'present'}, status = status.HTTP_200_OK)
            
            if guest.name == "" or guest.name == None:
                guest.name = name
                guest.save(update_fields = ['name'])

                send_channel_message(code, "member_joined", name)
                return Response({'new memeber': 'joined'}, status = status.HTTP_200_OK)

            else:
                names = {'old_name': guest.name, 'new_name': name}
                send_channel_message(code, "member_rejoined", names)
                
                guest.name = name
                guest.save(update_fields = ['name'])

                return Response({'new memeber': 'joined'}, status = status.HTTP_200_OK)
            
            return Response({'Something went wrong': 'Unable to complete request'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'bad_request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
        
class FileUpload(APIView):
    
    def post(self, request, format = None):

        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        guest_session = self.request.session.session_key

        guest = Guest.objects.filter(guest = guest_session)

        if guest.exists():
            guest = guest[0]
        else:
            return Response({"Bad Request": "Invalid Data..."}, status = status.HTTP_400_BAD_REQUEST)

        room = guest.room
       
        received_file = request.FILES['file']

        file_field = File(room = room, roomFile = received_file)
        
        file_field.save()

        file_field.downloadURL = create_presigned_url(file_field.roomFile.name, expiration = time_left(room.created_at) )
        file_field.save(update_fields = ['downloadURL'])

        data = {"file_url": file_field.downloadURL, "file_name": file_field.roomFile.name[8:]}
        send_channel_message(room.code, "file_download", data)
        return Response({"File Upload Successful": "Data Received"}, status = status.HTTP_202_ACCEPTED)

class FileUploadSpace(APIView):
    
    def get(self, request, format = None):

        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        guest_session = self.request.session.session_key

        guest = Guest.objects.filter(guest = guest_session)

        if guest.exists():
            guest = guest[0]
        else:
            return Response({"Bad Request": "Invalid Data..."}, status = status.HTTP_400_BAD_REQUEST)

        room = guest.room

        spaceLeft = space_left(room)

        return Response({"space_left": spaceLeft}, status = status.HTTP_200_OK)



class LeaveRoom(APIView):
    
    serializer_class = UpdateNameSerializer
    #We use this serializer because we only need the guest's name to exit the room 

    def get(self, request, format = None):
        
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        guest_session = self.request.session.session_key

        guest = Guest.objects.filter(guest = guest_session)[0]
        name = guest.name
  
        #if the host leaves, we don't delete the entry. This is because we'll need 'is_host' later
        if guest.is_host:
            send_channel_message(str(guest.room), "member_left", guest.name)
            return Response({"Exited": "Room Has Been Left"}, status = status.HTTP_200_OK)

        guest.delete()
        send_channel_message(str(guest.room), "member_left", guest.name)
        return Response({"Exited": "Room Has Been Left"}, status = status.HTTP_200_OK)
            
class DeleteRoom(APIView):
    serializer_class = RoomSerializer

    def put(self, request, format = None):
        
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        host_session = self.request.session.session_key

        host = Guest.objects.filter(guest = host_session)[0]
        
        room = Room.objects.filter(code = str(host.room))[0]
        room.delete()

        send_channel_message(str(host.room), "room_destroyed", "placeholder")
        return Response({"Room Destroyed": "All the data has been purged"}, status = status.HTTP_301_MOVED_PERMANENTLY)