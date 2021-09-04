from django.shortcuts import render
from django.http import HttpResponse
import mimetypes


# Create your views here.
def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")

def about(request, *args, **kwargs):
    return render(request, "frontend/about.html")

def contact(request, *args, **kwargs):
    return render(request, "frontend/contact.html")