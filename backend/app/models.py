from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.core.validators import validate_unicode_slug
from django.contrib.auth.models import UserManager


class Admin(AbstractBaseUser):
    nickname = models.CharField(
        max_length=256,
        validators=[validate_unicode_slug],
        primary_key=True,
    )
    objects = UserManager()

    USERNAME_FIELD = "nickname"
    REQUIRED_FIELDS = ["password"]


class Car(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    foto = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return self.id
