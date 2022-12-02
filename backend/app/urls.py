from django.urls import path
from app.views import ListCarView, DetailCarView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path("cars/", ListCarView.as_view(), name="car-all"),
    path("cars/<int:pk>/", DetailCarView.as_view(), name="car-detail"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"),
]
