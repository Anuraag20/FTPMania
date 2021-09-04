from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    pass

@admin.register(File)
class FilesAdmin(admin.ModelAdmin):
    pass