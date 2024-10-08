# Generated by Django 4.1.3 on 2024-05-14 02:28

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_rename_descripcion_material_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='material',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='material',
            name='updated_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='material',
            name='description',
            field=models.TextField(max_length=500),
        ),
        migrations.AlterField(
            model_name='material',
            name='file',
            field=models.FileField(default=django.utils.timezone.now, upload_to='materials'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='material',
            name='link',
            field=models.URLField(default=0),
            preserve_default=False,
        ),
    ]
