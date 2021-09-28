"""
ASGI config for filetransfer project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os
import django
from decouple import config
# from django.core.asgi import get_asgi_application
from channels.routing import get_default_application


os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'{config("PROJECT_NAME")}.settings')
django.setup()
# application = get_asgi_application()
application = get_default_application()