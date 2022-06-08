from django.urls import path
from .views import home,Productoform,Mod_Producto,delete_Producto,registerUser

urlpatterns = [
    path('', home, name="home"),
    path('agre-producto',Productoform, name="Productoform"),
    path('mod-producto/<id>',Mod_Producto, name="Mod_Producto"),
    path('agre-producto/<id>',delete_Producto, name="delete_Producto"),
    path('User-Form',registerUser, name="registerUser"),

]