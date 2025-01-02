"""
ASGI config for filetransfer project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os
import django
from django.core.asgi import get_asgi_application
from decouple import config

os.environ.setdefault('DJANGO_SETTINGS_MODULE', f"{config('PROJECT_NAME')}.settings")
django.setup()

from .routing import router
from channels.routing import ProtocolTypeRouter

application = ProtocolTypeRouter(
            {
                        "http": get_asgi_application(),
                        "websocket": router
            }
)

