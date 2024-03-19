from django.contrib import admin
from django.urls import path, include
from . import views


#Elements in this list can take 3 parametes:
# 1. route: A string that contains a URL pattern.
# 2. view: A view function that Django will call when the URL pattern is matched.
# 3. name_url: A name for the path
urlpatterns = [
    path('', views.index, name='index'),
]