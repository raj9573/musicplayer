from django.db import models

# Create your models here.

class Movie(models.Model):
    movie = models.CharField(max_length=100)
    hero  = models.CharField(max_length=100)
    heroine  = models.CharField(max_length=100)
    director = models.CharField(max_length=100)

    def __str__(self):

        return self.movie
class Songs(models.Model):

    movie = models.ForeignKey(Movie,on_delete=models.CASCADE)
    song = models.FileField(upload_to='songs')
    singer = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='images',default=True)
    def __str__(self):

        return self.song.name