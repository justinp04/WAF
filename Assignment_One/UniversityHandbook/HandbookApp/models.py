from django.db import models

# Create your models here.
class University(models.Model):
    name = models.CharField(max_length=255)
    # def __str__(self):
    #     return self.name

class School(models.Model):
    name = models.CharField(max_length=255)
    headOfSchool = models.CharField(max_length=255)
    university = models.ForeignKey(University, on_delete=models.CASCADE) # By applying this, a school can have one university but a university can have many schools
    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=255)
    coordinator = models.CharField(max_length=255)
    credits = models.IntegerField()
    school = models.ForeignKey(School, on_delete=models.CASCADE) # By applying this, a course can have one school but a school can have many courses
    # def __str__(self):
    #     return self.name