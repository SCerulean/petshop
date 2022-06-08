from django.contrib import admin
from .models import Categoria,Producto, Users
# Register your models here.


admin.site.register(Categoria)
admin.site.register(Producto)
admin.site.register(Users)