from channels.generic.websocket import AsyncWebsocketConsumer
import json
from .models import *

class RoomConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):      
        
        self.room_code = self.scope['url_route']['kwargs']['room_code']
        self.group_name = 'room_%s' % self.room_code
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

    async def channel_message(self, event):
        message = event['message']

        await self.send(text_data=json.dumps({
            'message': message
        }))

    async def lock_change(self, event):
        is_locked = event['message']
        #Had to add the 'exists' parameter to check at frontend what request was sent
        await self.send(text_data=json.dumps({
            'lock_change_exists': True,
            'lock_change': is_locked
        }))

    async def member_joined(self, event):
        name = event['message']
        #Had to add the 'exists' parameter to check at frontend what request was sent
        await self.send(text_data=json.dumps({
            'member_joined': name
        }))

    async def member_rejoined(self, event):
        names = event['message']
        #Had to add the 'exists' parameter to check at frontend what request was sent
        await self.send(text_data=json.dumps({
            'member_rejoined': names
        }))


    async def member_left(self, event):
        name = event['message']
        #Had to add the 'exists' parameter to check at frontend what request was sent
        await self.send(text_data=json.dumps({
            'member_left': name
        }))
    
    async def file_download(self, event):
        fileLink = event['message']
        #Had to add the 'exists' parameter to check at frontend what request was sent
        await self.send(text_data=json.dumps({
            'file_download': fileLink
        }))
        
    
    async def room_destroyed(self, event):
        name = event['message']
        #Had to add the 'exists' parameter to check at frontend what request was sent
        await self.send(text_data=json.dumps({
            'room_destroyed': 'Bye!'
        }))

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        
        await self.channel_layer.group_send(
            self.group_name,
            {
                'type': 'channel_message',
                'message': message
            }
        )
        
    async def disconnect(self, close_code):

        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )