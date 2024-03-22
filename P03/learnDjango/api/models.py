from django.db import models
from tastypie.resources import ModelResource
from bloggingApp.models import Post

# Create your models here.
class PostResource(ModelResource): 
    class Meta:
        queryset = Post.objects.all() #This returns a query, not an object.
        resource_name = 'posts' #This is the name of the resource that will be used in the URL. Hence localhost:8000/api/books/