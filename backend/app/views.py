from rest_framework import generics

from app.serializers import CarSerializer


from app.models import Car


class ListCarView(generics.ListAPIView):
    queryset = Car.objects.all().order_by("-valor")
    serializer_class = CarSerializer
