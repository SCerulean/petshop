from django.shortcuts import render,redirect
from .forms import ProductoForm,UserForm
from .models import Producto
#--from rest_framework import viewsets
#--from .serializers import ProductoSerializer
# Create your views here.

#--class ProductoViewset(viewsets.ModelViewSet):
    #--queryset = Producto.objects.all()
    #--serializer_class = ProductoSerializer 


def home (request):
    producto  = Producto.objects.all()
    datos = {'producto': producto}

    return render(request,'core/home.html',datos)

    
def Productoform(request):
    datos = {'form': ProductoForm()}
    if request.method == 'POST':
        formulario = ProductoForm(request.POST)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Datos guardados correctamente"
            
    return render(request, 'core/agre_producto.html', datos)


def Mod_Producto(request, id):
    producto = Producto.objects.get(SKU=id)
    datos = {
        'form': ProductoForm(instance=producto)
    }
    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, instance=producto)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Modificados correctamente"
    return render(request, 'core/mod_producto.html', datos)


def delete_Producto(request, id):
    producto = Producto.objects.get(SKU=id)
    producto.delete()
    return redirect(to="home")


def registerUser(request):
    datos = {'form': UserForm()}
    if request.method == 'POST':
        formulario = UserForm(request.POST)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Datos guardados correctamente"
            
    return render(request, 'core/Formulario.html', datos)

def Inicio(request):
    return render(request, 'core/Inicio.html')

def Catalogo(request):
    return render(request, 'core/CatalogoBase.html')

def productos(request):
    return render(request, 'core/Producto.html')



