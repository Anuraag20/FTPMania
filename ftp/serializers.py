from rest_framework import serializers
from .models import *


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = "__all__"


class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = "__all__"

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"

class UpdateIsLockedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ("is_locked", )

class UpdateNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ("name", )
