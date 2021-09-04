from django.urls import path
from .views import *

urlpatterns = [
    path('room-view/', RoomView.as_view()),
    path('guest-view/', GuestView.as_view()),
    path('file-view/', FileView.as_view()),
    path('create-room/', CreateRoomView.as_view()),
    path('get-room/', JoinRoom.as_view()),
    path('update-islocked/', UpdateIsLocked.as_view()),
    path('update-name/', UpdateName.as_view()),
    path('leave-room/', LeaveRoom.as_view()),
    path('delete-room/', DeleteRoom.as_view()),
    path('get-members/', GetMembers.as_view()),
    path('get-timeleft/', GetTimeLeft.as_view()),
    path('file-upload/', FileUpload.as_view()),
    path('get-files/', GetFiles.as_view()),
    path('get-space/', FileUploadSpace.as_view())
]