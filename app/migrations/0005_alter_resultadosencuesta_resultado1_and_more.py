# Generated by Django 4.1.3 on 2024-05-12 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_remove_areatrabajo_departamento'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resultadosencuesta',
            name='resultado1',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='resultadosencuesta',
            name='resultado2',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='resultadosencuesta',
            name='resultado3',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='resultadosencuesta',
            name='resultado4',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='resultadosencuesta',
            name='resultado5',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='resultadosencuesta',
            name='resultado6',
            field=models.FloatField(default=0, null=True),
        ),
    ]
