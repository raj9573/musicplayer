from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from app.views import *
from rest_framework.routers import DefaultRouter
DRO = DefaultRouter()
DRO.register('movies',MovieView,basename='movie')

DRO.register('songs',SongsView,basename='song')

