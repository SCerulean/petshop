import email
from msilib.schema import Class
from django import forms
from django.forms import ModelForm
from .models import Producto,Users


class ProductoForm (ModelForm):
    class Meta :
        model = Producto
        fields= ['SKU','nombre','marca','precio','stock','categoria',]


        
class UserForm (ModelForm):
    nombre = forms.CharField(label="nombre",widget=forms.TextInput(attrs={"placeholder": "escribe tu nombre"}))
    contraseña = forms.CharField(label="nombre",widget=forms.TextInput(attrs={"placeholder": "escribe tu contraseña"}))
    email = forms.CharField(label="nombre",widget=forms.TextInput(attrs={"placeholder": "escribe tu email"}))
    class Meta :
        model = Users
        fields= ['nombre','contraseña','email',]



