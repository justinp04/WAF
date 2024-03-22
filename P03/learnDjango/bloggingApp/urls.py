from django.contrib import admin
from django.urls import path, include
from . import views


#Elements in this list can take 3 parametes:
# 1. route: A string that contains a URL pattern.
# 2. view: A view function that Django will call when the URL pattern is matched.
# 3. name_url: A name for the path
urlpatterns = [
    path('', views.index, name='index'),
    # path( '<book_id>', views.detail, name = 'books_detail')
    path('<int:post_id>', views.post_detail)
]