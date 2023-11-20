from django.shortcuts import render

# Create your views here.
from app.models import *
from app.serializers import *
from rest_framework import viewsets

class MovieView(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class SongsView(viewsets.ModelViewSet):
    queryset = Songs.objects.all()
    serializer_class = SongsSerializer

    