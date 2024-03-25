from django.contrib import admin
from .models import University, School, Course

# Register your models here.
admin.site.register(University)
admin.site.register(School)
admin.site.register(Course)