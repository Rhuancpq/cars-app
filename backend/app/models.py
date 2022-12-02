from django.db import models

# Create your models here.


class Car(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    foto = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return self.id
