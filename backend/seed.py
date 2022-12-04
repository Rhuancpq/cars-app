import os
import django
import string
from django.contrib.auth.hashers import make_password

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "api.settings")
django.setup()
from app.models import Admin, Car


def seed():
    Admin.objects.all().delete()
    admin = Admin(nickname="admin", password="admin123")
    admin.password = make_password(admin.password)
    admin.is_active = True
    admin.save()
    print(Admin.objects.all().count())

    if Car.objects.all().count() == 0:
        for i in range(1, 11):
            car = Car(
                nome="Car " + str(i),
                valor=1000 * i,
                foto="https://picsum.photos/200/300",
                marca="Brand " + str(i),
                modelo="Model " + str(i),
            )
            car.save()


seed()
