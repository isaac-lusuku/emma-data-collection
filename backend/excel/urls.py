# excel/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/save-data/', views.save_data, name='submit_data'),

]

