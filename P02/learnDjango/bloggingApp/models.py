from django.db import models
import datetime as datetime

# Create your models here.
class Rating(models.Model):
    numReviews = models.IntegerField()
    avgRatng = models.FloatField()

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    rating = models.ForeignKey(Rating, on_delete=models.CASCADE)

class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    tag = models.CharField(max_length=255)
    date = models.DateField()
    slug = models.SlugField(max_length=255, unique=True)

    # Model method to check if a post was published before Covid
    def was_published_before_covid(self):
        return self.date < datetime.date(2020, 3, 10)