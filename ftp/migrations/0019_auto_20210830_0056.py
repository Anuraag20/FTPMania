# Generated by Django 3.2.6 on 2021-08-29 19:26

from django.db import migrations, models
import django.db.models.deletion
import ftp.models


class Migration(migrations.Migration):

    dependencies = [
        ('ftp', '0018_alter_files_roomfile'),
    ]

    operations = [
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roomFile', models.FileField(upload_to=ftp.models.get_file_path)),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ftp.room')),
            ],
        ),
        migrations.DeleteModel(
            name='Files',
        ),
    ]
