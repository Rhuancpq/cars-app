# Generated by Django 4.1.3 on 2022-12-02 21:49

import django.contrib.auth.models
import django.core.validators
from django.db import migrations, models
import re


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Admin",
            fields=[
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "nickname",
                    models.CharField(
                        max_length=256,
                        primary_key=True,
                        serialize=False,
                        validators=[
                            django.core.validators.RegexValidator(
                                re.compile("^[-\\w]+\\Z"),
                                "Enter a valid “slug” consisting of Unicode letters, numbers, underscores, or hyphens.",
                                "invalid",
                            )
                        ],
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
            managers=[
                ("objects", django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
