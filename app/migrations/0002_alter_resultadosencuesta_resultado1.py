# Generated by Django 4.1.3 on 2024-04-04 04:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resultadosencuesta',
            name='resultado1',
            field=models.FloatField(default=1, null=True),
        ),
    ]
