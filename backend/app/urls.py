from django.urls import path
from app.views import ListCarView

urlpatterns = [
    path("car/", ListCarView.as_view(), name="car-all"),
]
