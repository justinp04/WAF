from django.db import models

# Create your models here.
class Rating(models.Model):
    numReviews = models.IntegerField()
    avgRatng = models.FloatField()

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    rating = models.ForeignKey(Rating, on_delete=models.CASCADE)
