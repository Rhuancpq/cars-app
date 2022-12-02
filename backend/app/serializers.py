from rest_framework import serializers

from app.models import Car


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ("id", "nome", "marca", "modelo", "foto")
