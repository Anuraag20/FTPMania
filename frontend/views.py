from django.shortcuts import render, HttpResponse

robots_file = '''User-agent: *
Disallow: /api/

User-agent: Googlebot
Allow: /$

User-agent: AdsBot-Google
Allow: /


'''
def google_verification(request):
    return render(request, "extras/google77b694aaf072f976.html")

def robots(request):
    content = robots_file
    return HttpResponse(content, content_type='text/plain')

def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")

def about(request, *args, **kwargs):
    return render(request, "frontend/about.html")
