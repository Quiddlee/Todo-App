# Generated by Django 5.0.3 on 2024-04-11 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0012_todo_is_pined'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='label',
        ),
        migrations.AddField(
            model_name='todo',
            name='labels',
            field=models.ManyToManyField(blank=True, to='todos.label'),
        ),
    ]