from django.shortcuts import render
from django.http import HttpResponse
from .models import Post

# Create your views here.
def index(request):
    # We are returning dynamic HTML content to the user
    postsQuerySet = Post.objects.all()
    return render(request, 'index.html', {'posts' : postsQuerySet})