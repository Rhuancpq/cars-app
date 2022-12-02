import os
import django
import string
from django.contrib.auth.hashers import make_password

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "api.settings")
django.setup()
from app.models import Admin


def seed():
    Admin.objects.all().delete()
    admin = Admin(nickname="admin", password="admin123")
    admin.password = make_password(admin.password)
    admin.is_active = True
    admin.save()
    print(Admin.objects.all().count())


seed()
