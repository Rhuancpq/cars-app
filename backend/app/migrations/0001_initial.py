# Generated by Django 4.1.3 on 2022-12-02 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Car",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("nome", models.CharField(max_length=100)),
                ("marca", models.CharField(max_length=100)),
                ("modelo", models.CharField(max_length=100)),
                ("foto", models.CharField(max_length=100)),
                ("valor", models.DecimalField(decimal_places=2, max_digits=15)),
            ],
        ),
    ]
