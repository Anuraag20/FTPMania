from django.shortcuts import render

def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")

def about(request, *args, **kwargs):
    return render(request, "frontend/about.html")
