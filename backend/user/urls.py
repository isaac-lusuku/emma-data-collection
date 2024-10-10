# urls.py
from django.urls import path
from .views import LoginView

urlpatterns = [
    path('api/token/', LoginView.as_view(), name='token_obtain_pair'),
]
