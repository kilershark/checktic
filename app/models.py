from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
# Create your models here.
import os


# Modelo para almacenar los Depatamentos
class Departamento(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

# Modelo para almacenar las areas de trabajo
class AreaTrabajo(models.Model):
    nombre = models.CharField(max_length=100)
   
    def __str__(self):
        return self.nombre

# Modelo para la informacion de usuario
class UsuarioInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    departamento = models.ForeignKey(Departamento, on_delete=models.SET_NULL, null=True)
    area_trabajo = models.ForeignKey(AreaTrabajo, on_delete=models.SET_NULL, null=True)
    foto_perfil = models.ImageField(upload_to='fotos_perfil/', null=True, blank=True)

    def __str__(self):
        return self.user.username


# Modelo para almacenar el resultado de la encuesta
class ResultadosEncuesta(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    resultado1 = models.FloatField(default=0,null=True)
    resultado2 = models.FloatField(default=0,null=True)
    resultado3 = models.FloatField(default=0,null=True)
    resultado4 = models.FloatField(default=0,null=True)
    resultado5 = models.FloatField(default=0,null=True)
    resultado6 = models.FloatField(default=0,null=True)
    pocentGeneral = models.FloatField(default=0,null=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f'Resultados de {self.user.username}'
  
# Modelo para almacenar q el usuario hizo o no la encuesta
class EncuestaRealizada(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    completada = models.BooleanField(default=False)

    def __str__(self):
        return self.usuario.username + ' - Encuesta completada: ' + str(self.completada)


# Modelo para almacenar los materiales
class Material(models.Model):
    file = models.FileField(upload_to='materials')
    name = models.CharField(max_length=100)
    link = models.URLField(max_length=200)
    description = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    def get_file_type(self):
        _, file_extension = os.path.splitext(self.file.name)
        if file_extension.lower() in ['.jpg', '.png','.jpeg']:
            return 'image'
        elif file_extension.lower() == '.pdf':
            return 'pdf'
        elif file_extension.lower() in ['.doc', '.docx']:
            return 'document'
        elif file_extension.lower() in ['.zip', '.rar']:
            return 'compressed'
        else:
            return 'other'