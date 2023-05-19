from django.urls import path
from .views import profile

app_name = 'finance_tracker'

urlpatterns = [
    path('profile/', profile, name='profile'),
]
