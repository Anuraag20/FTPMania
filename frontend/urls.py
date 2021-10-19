from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('room/', index),
    path('room/<str:roomCode>/', index),
    path('about/', about),
    path('terms/', about),
    path('research/', about),
    path('contact/', about),
    path('robots.txt/', robots),
    path('google77b694aaf072f976.html', google_verification),
]