from django import forms
from .models import *
import re
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


class DepartamentoForm(forms.ModelForm):
    class Meta:
        model = Departamento
        fields = ['nombre']
        labels = {
            'nombre': 'Nombre del Departamento'
            
        }
        
class Area_TrabajoForm(forms.ModelForm):
    class Meta:
        model = Departamento
        fields = ['nombre']
        labels = {
            'nombre': 'Nombre del Area de Trabajo'
        }
    


class MaterialForm(forms.ModelForm):
    class Meta:
        model = Material
        fields = [ 'name','link', 'description', 'file']
        labels = {
            
            'name': 'Nombre',
            'link': 'Enlace',
            'description': 'Descripción',
            'file': 'file'
        }
