# Generated by Django 3.2.6 on 2021-08-29 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ftp', '0015_alter_files_roomfile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='files',
            name='roomFile',
            field=models.FileField(upload_to='test'),
        ),
    ]
