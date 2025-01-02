from django.urls import re_path
from .consumers import *

websocket_urlpatterns = [
    re_path(r'ws/room/(?P<room_code>[-\w]+)/', RoomConsumer.as_asgi()),  
]
