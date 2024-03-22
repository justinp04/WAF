from django.contrib import admin
from .models import Post, Book, Rating

# Register your models here.
admin.site.register(Post)
admin.site.register(Book)
admin.site.register(Rating)