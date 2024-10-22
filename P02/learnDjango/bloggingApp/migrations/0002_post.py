# Generated by Django 5.0.2 on 2024-03-19 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bloggingApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('tag', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('slug', models.SlugField(max_length=255, unique=True)),
            ],
        ),
    ]
