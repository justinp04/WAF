from django.shortcuts import render, get_object_or_404
from .models import School, Course

# Create your views here.
def school_index(request):
    schoolQuerySet = School.objects.all()
    return render(request, 'index_schools.html', {'schools': schoolQuerySet})

def course_index(request):
    courseQuerySet = Course.objects.all()
    return render(request, 'index_courses.html', {'courses': courseQuerySet})

def school_detail(request, school_id):
    schoolObject = get_object_or_404(School, id=school_id)
    courseQuerySet = Course.objects.filter(school=school_id)
    return render(request, 'detail_school.html', {'courses': courseQuerySet, 'school': schoolObject})

def error_400( request, exception ):
    return render('Bad Request', status=400)

def error_403( request, exception ):
    return render('Forbidden', status=403)

def error_404( request, exception ):
    return render('Cannot find the content!', status=404)

def error_500( request ):
    return render('Server error!', status=500)