"""
URL configuration for learnDjango project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import bloggingApp
from api.models import PostResource

post_resource = PostResource()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('bloggingApp.urls')),
    path('books/', include('bloggingApp.urls')),
    path('api/', include(post_resource.urls)),
]

handler400 = bloggingApp.views.error_400
handler403 = bloggingApp.views.error_403
handler404 = bloggingApp.views.error_404
handler500 = bloggingApp.views.error_500
