from django import forms
from django.forms import ModelForm
from .models import Producto,Users


class ProductoForm (ModelForm):
    class Meta :
        model = Producto
        fields= ['SKU','nombre','marca','precio','stock','categoria',]


        
class UserForm (ModelForm):

    class Meta :
        model = Users
        fields= ['nombre','contraseña','email',]