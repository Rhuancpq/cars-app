# Generated by Django 4.1.3 on 2022-12-05 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0002_admin"),
    ]

    operations = [
        migrations.AlterField(
            model_name="car",
            name="foto",
            field=models.TextField(),
        ),
    ]