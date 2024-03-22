from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Post, Book

# Create your views here.
def index(request):
    # We are returning dynamic HTML content to the user
    postsQuerySet = Post.objects.all()
    return render(request, 'index.html', {'posts' : postsQuerySet})

def detail( request, book_id ):
    book = Book.objects.get(id=book_id)
    return render(request, 'details.html', {'book': book})

def post_detail( request, post_id):
    # Will return a 404 error if not found
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'details.html', {'post': post})

def error_400( request, exception ):
    return render('Bad Request', status=400)

def error_403( request, exception ):
    return render('Forbidden', status=403)

def error_404( request, exception ):
    return render('Cannot find the content!', status=404)

def error_500( request ):
    return render('Server error!', status=500)