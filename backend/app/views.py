from rest_framework import generics
from app.serializers import CarSerializer
from app.permissions import PublicReadOnly


from app.models import Car


class ListCarView(generics.ListCreateAPIView):
    permission_classes = [PublicReadOnly]
    queryset = Car.objects.all().order_by("-valor")
    serializer_class = CarSerializer


class DetailCarView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
