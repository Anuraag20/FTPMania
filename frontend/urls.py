from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('room/', index),
    path('room/<str:roomCode>', index),
]