from django.urls import path
from . import views
from .views import *


urlpatterns = [
    path('ml-model/', views.ml_stuff, name="ml-model/"),
]