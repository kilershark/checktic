
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
from django.contrib.auth import login,authenticate
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import render,redirect

from audioop import reverse

from .models import *
from .forms import *
# Create your views here.




def nuevo(request):
  return render(request, 'administrador/nuevo.html')

def inicio(request):
  return render(request, 'administrador/inicio.html')


def encuesta(request):
  return render(request, 'administrador/encuesta2_copy.html')

def estadistica(request):
  return render(request, 'administrador/estadistica.html')

def contacto(request):
  return render(request, 'administrador/contacto.html')

def instrucciones(request):
  return render(request, 'administrador/instrucciones.html')


def evaluacion(request):
  return render(request, 'administrador/evaluacion.html')


###################### vista de login, registro, listar usuarios y evaluacion de usuario ####################
from django.contrib.auth.hashers import make_password


def perfil(request):
    if request.method == 'POST':
        # Obtener los datos del usuario desde el formulario
        primer_nombre = request.POST['primer_nombre']
        segundo_nombre = request.POST['segundo_nombre']
        email = request.POST['email']
        username = request.POST['username']
        area_trabajo_id = request.POST['area_trabajo']
        departamento_id = request.POST['departamento']
        password = request.POST['password']
        password_confirm = request.POST['password_confirm']


        # Actualizar la información del usuario
        user = request.user
        user.first_name = primer_nombre
        user.last_name = segundo_nombre
        user.email = email
        user.username = username
        user.save()

        # Actualizar el área de trabajo y el departamento del usuario
        area_trabajo = AreaTrabajo.objects.get(id=area_trabajo_id)
        departamento = Departamento.objects.get(id=departamento_id)
        user.area_trabajo = area_trabajo
        user.departamento = departamento
        
          # Actualizar la contraseña si se ha proporcionado una nueva
        if password and password == password_confirm:
            user.password = make_password(password)


        user.save()

        return redirect('perfil')

    # Obtener la información del usuario
    user = request.user
    areas_trabajo = AreaTrabajo.objects.all()
    departamentos = Departamento.objects.all()

    context = {
        'user': user,
        'areas_trabajo': areas_trabajo,
        'departamentos': departamentos,
    }

    return render(request, 'administrador/perfil.html', context)


# def login_view(request):
#     if request.method == 'POST':
#        email = request.POST['email']
#        password = request.POST['password']
      
#        user = User.objects.get( email=email)
       
#        if (password,user.password):
#            login(request, user)
#            return redirect(to='inicio')
#        else:
#            return HttpResponse('Contraseña incorrecta')
#     else:
#         return render(request,'registro/login.html' )


def login_view(request):
    error_message = None
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            error_message = 'El usuario no existe.'
            return render(request, 'registro/login.html', {'error_message': error_message})

        user = authenticate(request, username=user.username, password=password)
        if user is not None:
            login(request, user)
            return redirect('inicio')
        else:
            error_message = 'Contraseña incorrecta.'
            return render(request, 'registro/login.html', {'error_message': error_message})
    else:
        return render(request, 'registro/login.html')


def register(request):
    if request.method == 'POST':
        
        username = request.POST['username']
        first_name = request.POST['primer_nombre']
        last_name = request.POST['segundo_nombre']
        email = request.POST['email']
        password = request.POST['password']
        departamento_id = request.POST['departamento']
        area_trabajo_id = request.POST['area_trabajo']

        # Crear un nuevo usuario
        user = User.objects.create_user(username=username, email=email, password=password,first_name=first_name,last_name=last_name)
        user.save()

        # Crear la información adicional del usuario
        departamento = Departamento.objects.get(id=departamento_id)
        area_trabajo = AreaTrabajo.objects.get(id=area_trabajo_id)
        usuario_info = UsuarioInfo(user=user, departamento=departamento, area_trabajo=area_trabajo)
        usuario_info.save()
        
         # Crear un registro en EncuestaRealizada para el usuario recién registrado
        encuesta_realizada = EncuestaRealizada(usuario=user, completada=False)
        encuesta_realizada.save()
        
        
        resultados_encuesta = ResultadosEncuesta(user=user)
        resultados_encuesta.save()
        # Autenticar al usuario
        login(request, user)

        # Redirigir al usuario a la página de inicio
        return redirect('inicio')

    else:
        # Si no es un POST, renderiza el formulario vacío
        departamentos = Departamento.objects.all()
        areas_trabajo = AreaTrabajo.objects.all()
        return render(request, 'registro/registro.html', {'departamentos': departamentos, 'areas_trabajo': areas_trabajo})

def evaluacion_usuario(request):
    resultado = ResultadosEncuesta.objects.filter(user=request.user).first()
    return render(request, 'administrador/evaluacion.html', {'resultado': resultado})

def listado_users(request):
    users = User.objects.all()
    profiles = UsuarioInfo.objects.all()
    resultadosuser = ResultadosEncuesta.objects.all()
    return render(request, 'administrador/listado_users.html', {'users': users, 'profiles': profiles, 'resultadosuser': resultadosuser })

def listado_depart(request):
    mensaje = request.session.pop('mensaje', '')  
   
    print(mensaje)
    
    departamentos = Departamento.objects.all()
    
    # Dividir la lista de departamentos en dos partes iguales
    midpoint = len(departamentos) // 2
    departamentos1 = departamentos[:midpoint]
    departamentos2 = departamentos[midpoint:]
    
    context = {
        'departamentos1': departamentos1,
        'departamentos2': departamentos2,
        'mensaje': mensaje,
        
    }
    return render(request, 'administrador/listado_depart.html', context )
    
   

def listado_At(request):
    mensaje = request.session.pop('mensaje', '')

    area_trabajo = AreaTrabajo.objects.all()

    # Dividir la lista de areas de trabajo en dos partes iguales
    midpoint = len(area_trabajo) // 2
    area_trabajo1 = area_trabajo[:midpoint]
    area_trabajo2 = area_trabajo[midpoint:]

    context = {
        'area_trabajo1': area_trabajo1,
        'area_trabajo2': area_trabajo2,
        'mensaje': mensaje,
    }

    return render(request, 'administrador/listado_At.html', context)



#################################### Vistas de guardar encuesta y verificar la encuesta ###########################
def guardar_resultados(request):
    if request.method == 'POST':
        # Obtener la instancia de ResultadosEncuesta del usuario actual
        resultados_encuesta = ResultadosEncuesta.objects.get(user=request.user)
        
        # Actualizar los valores de los campos
        resultados_encuesta.resultado1 = request.POST.get('resultado1')
        resultados_encuesta.resultado2 = request.POST.get('resultado2')
        resultados_encuesta.resultado3 = request.POST.get('resultado3')
        resultados_encuesta.resultado4 = request.POST.get('resultado4')
        resultados_encuesta.resultado5 = request.POST.get('resultado5')
        resultados_encuesta.resultado6 = request.POST.get('resultado6')
        resultados_encuesta.pocentGeneral = request.POST.get('porcentGeneral')
        
        
        # Guardar los cambios en la base de datos
        resultados_encuesta.save()
        
        # Actualizar el estado de EncuestaRealizada
        encuesta_realizada, created = EncuestaRealizada.objects.get_or_create(usuario=request.user)
        encuesta_realizada.completada = True
        encuesta_realizada.save()
        
        return JsonResponse({'mensaje': 'Resultados actualizados correctamente'})
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)
    
def verificar_encuesta(request):
    usuario_actual = request.user
    encuesta_completada = EncuestaRealizada.objects.filter(usuario=usuario_actual, completada=True).exists()

    context = {
        'encuesta_completada': encuesta_completada
    }

    if encuesta_completada:
        context['mostrar_modal'] = True
        return render(request, 'administrador/inicio.html', context) 
    else:
      return redirect('encuesta') 


############################## Vistas relacionadas a la gestion de departamentos y areas de trabajo #########################

#########################   DEPARTAMENTO ##############################

# def departamento_list(request):
#     mensaje = request.session.pop('mensaje', '')  # Obtiene y elimina el mensaje de la sesión
#     departamentos = Departamento.objects.all()
    
#     return render(request, 'administrador/listado_depart.html', {'departamentos':departamentos, 'mensaje': mensaje})

    
def agregar_departamento(request):
    if request.method == 'POST':
        form = DepartamentoForm(request.POST)
        if form.is_valid():
            departamento = form.save()  # Guardar el departamento en la base de datos
            request.session['mensaje'] = 'Departamento agregado correctamente.'  # Guardar en la sesión
            return redirect('listado_depart')  # Reemplaza 'nombre_de_la_url' con la URL a la que deseas redirigir después de agregar el departamento
    else:
        form = DepartamentoForm()
    
    context = {
        'form': form
    }
    return render(request, 'administrador/listado_depart.html', context)

def modificar_departamento(request, id_departamento):
    departamento = get_object_or_404(Departamento, id=id_departamento)
    
    nuevo_nombre = request.POST.get('nuevo_nombre')
    if nuevo_nombre:
        departamento.nombre = nuevo_nombre
        departamento.save()
        request.session['mensaje'] = 'Departamento modificado correctamente.'  # Guardar en la sesión

        print(messages)
    return redirect('listado_depart')  # Redirige a la vista de listado



# def eliminar_departamento(request, departamento_id):
#     if request.method == 'POST':
#         departamento = Departamento.objects.get(id=departamento_id)
#         departamento.delete()
        
#         return redirect('listado_depart')
#     else:
#         # Manejar el caso en el que no se realiza una solicitud POST
#         # Puede mostrar un mensaje de error o realizar otra acción
#         pass

def eliminar_departamento(request, departamento_id):
    if request.method == 'POST':
        departamento = Departamento.objects.get(id=departamento_id)
        departamento.delete()
        
        # Agregar un mensaje de éxito
        request.session['mensaje'] = 'Departamento eliminado correctamente.'  # Guardar en la sesión
        
        return redirect('listado_depart')
    else:
        # Manejar el caso en el que no se realiza una solicitud POST
        messages.error(request, 'No se pudo eliminar el departamento. Inténtalo de nuevo.')
        return redirect('listado_depart')


#############################   AREA DE TRABAJO ###############################

def area_list(request):
    area_trabajo = AreaTrabajo.objects.all()
    
    return render(request, 'administrador/listado_At.html', {'area_trabajo':area_trabajo})



def agregar_area_trabajo(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')

        # Verificar que el nombre no esté vacío
        if nombre:
            # Crear una nueva instancia del modelo
            nueva_area = AreaTrabajo(nombre=nombre)
            nueva_area.save()
            request.session['mensaje'] = 'Area de Trabajo agregado correctamente.'  # Guardar en la sesión
            return redirect('listado_At')  # Redirigir a la vista de listado de áreas de trabajo
        else:
            messages.error(request, 'El nombre del área de trabajo no puede estar vacío.')

    return render(request, 'administrador/listado_At.html')  # Cambia esta ruta según tu estructura de carpetas




def modificar_area_trabajo(request, area_trabajo_id):
    if request.method == 'POST':
        # Obtener el departamento a modificar
        area_trabajo = AreaTrabajo.objects.get(id=area_trabajo_id)

        # Actualizar el nombre del departamento
        nuevo_nombre = request.POST.get('nuevo_nombre')
        area_trabajo.nombre = nuevo_nombre
        area_trabajo.save()
        request.session['mensaje'] = 'Area de Trabajo modificada correctamente.'  # Guardar en la sesión
        # Redirigir a la vista de listado de departamentos
        return redirect('listado_At')
    else:
        # Obtener el departamento a modificar
        area_trabajo = AreaTrabajo.objects.get(id=area_trabajo_id)

        # Renderizar el template con el departamento a modificar
        return render(request, 'administrador/listado_At.html', {'area_trabajo': area_trabajo})
    
def eliminar_area_trabajo(request, area_trabajo_id):
    if request.method == 'POST':
        area_trabajo = AreaTrabajo.objects.get(id=area_trabajo_id)
        area_trabajo.delete()
        request.session['mensaje'] = 'Area de Trabajo eliminada correctamente.'  # Guardar en la sesión
        # Redirigir a una página de confirmación o a la página original
        return redirect('listado_At')
    else:
        # Manejar el caso en el que no se realiza una solicitud POST
        # Puede mostrar un mensaje de error o realizar otra acción
        pass
    
################################ MATERIAL #####################################

def material_list(request):
    material = Material.objects.all()
    context = {
        'material': material,
    }
    return render(request, 'administrador/material.html', context)


def agregar_material(request):
    if request.method == 'POST':
        file = request.FILES['file']
        name = request.POST['name']
        link = request.POST['link']
        description = request.POST['description']
        
        if file and name and link:
            try:
                material = Material(
                    file=file,
                    name=name,
                    link=link,
                    description=description
                )
                material.save()
                return redirect('material_list')
            except Exception as e:
                print(f'Error al guardar el material: {e}')
                return render(request, 'administrador/material.html', {'error': 'Hubo un error al agregar el material.'})
    return render(request, 'administrador/material.html')


# def modificar_material(request, material_id):
#     if request.method == 'POST':
#         material = Material.objects.get(id=material_id)
#         nuevo_nombre = request.POST.get('nuevo_nombre')
#         material.nombre = nuevo_nombre
#         material.save()
#         return redirect('material_list')
#     else:
#         material = Material.objects.get(id=material_id)
#         return render(request, 'administrador/listado.html', {'material': material})

# def modificar_material(request, material_id):
#     if request.method == 'POST':
#         # Obtener el material a modificar
#         material = Material.objects.get(id=material_id)

#         # Actualizar los campos del material
#         material.name = request.POST.get('nombre')
#         material.file = request.FILES.get('archivo')
#         material.description = request.POST.get('descripcion')
#         material.link = request.POST.get('enlace')
#         material.save()

#         # Redirigir a la vista de listado de materiales
#         return redirect('lista_materiales')
#     else:
#         # Obtener el material a modificar
#         material = Material.objects.get(id=material_id)

#         # Renderizar el template con el material a modificar
#         return render(request, 'administrador/modificar_material.html', {'material': material})

from django.shortcuts import render, redirect, get_object_or_404


def modificar_material(request, material_id):
    material = get_object_or_404(Material, id=material_id)
    if request.method == 'POST':
        nombre = request.POST['name']
        enlace = request.POST['link']
        descripcion = request.POST['description']
        archivo = request.FILES.get('file')

        material.name = nombre
        material.link = enlace
        material.description = descripcion
        if archivo:
            material.file = archivo
        material.save()
        messages.success(request, 'Material actualizado correctamente.')
        return redirect('lista_materiales')
    else:
        context = {
            'material': material,
        }
        return render(request, 'editar_material.html', context)


def eliminar_material(request, material_id):
    if request.method == 'POST':
        material = Material.objects.get(id=material_id)
        material.delete()
        return redirect('material_list')
    else:
        pass

############################# Grafico de usuarios ############################

areas_trabajo = AreaTrabajo.objects.all()
departamentos = Departamento.objects.all()
material = Material.objects.all()
user = User.objects.all()
    

def get_user_stats(request):
    user_resultado = ResultadosEncuesta.objects.all()

    bien_count = 0
    mal_count = 0
    regular_count = 0
    competente_count = 0
    no_realizadas_count = 0

    for profile in user_resultado:
        if profile.pocentGeneral >= 75:
            bien_count += 1
        elif profile.pocentGeneral >= 25:
            regular_count += 1
        elif profile.pocentGeneral > 0:
            mal_count += 1
        elif profile.pocentGeneral >= 75:
            competente_count += 1
        else:
            no_realizadas_count += 1

    total_users = user_resultado.count()
    bien_percentage = (bien_count / total_users) * 100
    mal_percentage = (mal_count / total_users) * 100
    regular_percentage = (regular_count / total_users) * 100
    competente_percentage = (competente_count / total_users) * 100
    no_realizadas_percentage = (no_realizadas_count / total_users) * 100

    user_stats = [
        {'status': 'Bien', 'count': bien_count, 'percentage': bien_percentage},
        {'status': 'Mal', 'count': mal_count, 'percentage': mal_percentage},
        {'status': 'Regular', 'count': regular_count, 'percentage': regular_percentage},
        {'status': 'Competente', 'count': competente_count, 'percentage': competente_percentage},
        {'status': 'No realizadas', 'count': no_realizadas_count, 'percentage': no_realizadas_percentage}
    ]

    return JsonResponse(user_stats, safe=False)

# Vista para manejar la subida de la foto de perfil
def subir_foto(request):
    if request.method == 'POST':
        foto = request.FILES.get('foto_perfil')
        usuario_info = UsuarioInfo.objects.get(user=request.user)  # Asegúrate de ajustar esto según tu lógica
        usuario_info.foto_perfil = foto
        usuario_info.save()
        return redirect('perfil')  # Redirige a donde desees
    return render(request, 'administrador/perfil.html')

def eliminar_foto(request):
    if request.method == 'POST':
        usuario_info = request.user.usuarioinfo
        usuario_info.foto_perfil.delete(save=False)  # Elimina el archivo de la base de datos
        usuario_info.foto_perfil = None  # Elimina la referencia en el modelo
        usuario_info.save()  # Guarda los cambios
        return redirect('perfil')  # Redirige a la vista deseada