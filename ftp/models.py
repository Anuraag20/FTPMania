from django.db import models
import os
import random as r
from string import ascii_uppercase as alphabet

def generate_room_code():
    while True:
        room_code = ""
        for i in range(3):
            random_position = r.randint(0, 25)
            room_code += alphabet[random_position]

        room_code += "-"
        
        for i in range(3):
            random_position = r.randint(0, 25)
            room_code += alphabet[random_position]

        if Room.objects.filter(code = room_code).count() == 0:
            return room_code

def get_file_path(instance, filename):
    return os.path.join(str(instance.room), filename)

# Create your models here.


class Room(models.Model):
    code = models.CharField(max_length = 8, default = generate_room_code, unique = True)
    host = models.CharField(max_length = 50, default = "", unique = True)
    is_locked = models.BooleanField(default = False)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.code

class Guest(models.Model):
    room = models.ForeignKey(Room, on_delete = models.CASCADE)
    guest = models.CharField(max_length = 50, default = "", unique = True)
    name = models.CharField(max_length = 20, default = "")
    is_host = models.BooleanField(default = False)

    def __str__(self):
        return self.guest

        
class File(models.Model):
    room = models.ForeignKey(Room, on_delete = models.CASCADE)
    roomFile = models.FileField(upload_to = get_file_path)
    
    @property
    def downloadURL(self):
        return self.roomFile.url
