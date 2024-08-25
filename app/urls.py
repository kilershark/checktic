from os import path
from .views import *
from django import views
from django.urls import  include, path
from django.contrib.auth import views



urlpatterns = [
     path('user-stats/',get_user_stats, name='user_stats'),
     
     path('login/', login_view, name="login"),
     path('logout/', views.LogoutView.as_view(), name='logout'),

    path('registro/', register, name='registro'),
    #  path("inicio",registro, name="inicio"),
    path("inicio",inicio, name="inicio"),
    path("encuesta",encuesta, name="encuesta"),
    path("contacto",contacto, name="contacto"),
    path("estadistica",estadistica, name="estadistica"),
    path("instrucciones",instrucciones, name="instrucciones"),
    path("perfil",perfil, name="perfil"),
   
    path("nuevo",nuevo, name="nuevo"),
    
    
    path('listado_users/',listado_users, name='listado_users'),
    path('listado_depart/',listado_depart, name='listado_depart'),
    path('listado_At/',listado_At, name='listado_At'),
    
    
    
    path('evaluacion/',evaluacion_usuario, name='evaluacion'),
    path('guardar_resultados/',guardar_resultados, name='guardar_resultados'),
    path('verificar-encuesta/', verificar_encuesta, name='verificar_encuesta'),
     
     
    path('agregar_area_trabajo/', agregar_area_trabajo, name='agregar_area_trabajo'),
    path('modificar_area_trabajo/<int:area_trabajo_id>/', modificar_area_trabajo, name='modificar_area_trabajo'),
    path('eliminar_area_trabajo/<int:area_trabajo_id>/', eliminar_area_trabajo, name='eliminar_area_trabajo'),
    
    
    path('agregar-departamento/', agregar_departamento, name='agregar_departamento'),
    path('modificar_departamento/<int:id_departamento>/', modificar_departamento, name='modificar_departamento'),
    path('eliminar_departamento/<int:departamento_id>/', eliminar_departamento, name='eliminar_departamento'),

    path('material/',material_list, name='material_list'),
   
    
    path('agregar_material/', agregar_material, name='agregar_material'),
     path('material/<int:material_id>/editar/', modificar_material, name='editar_material'),
   
    path('eliminar_material/<int:material_id>/', eliminar_material, name='eliminar_material'),
    
    path('subir_foto/', subir_foto, name='subir_foto'),
    path('eliminar-foto/', eliminar_foto, name='eliminar_foto'),
    
]
