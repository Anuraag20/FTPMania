# Generated by Django 3.2.6 on 2021-08-21 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ftp', '0005_room_is_locked'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='name',
            field=models.CharField(default='', max_length=20, unique=True),
        ),
    ]
