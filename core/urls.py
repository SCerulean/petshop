from django.urls import path,include
from .views import home,Productoform,Mod_Producto,delete_Producto,registerUser,Inicio, Catalogo,productos,ProductoViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Producto' , ProductoViewset)

urlpatterns = [
    path('', home, name="home"),
    path('agre-producto',Productoform, name="Productoform"),
    path('mod-producto/<id>',Mod_Producto, name="Mod_Producto"),
    path('agre-producto/<id>',delete_Producto, name="delete_Producto"),
    path('User-Form',registerUser, name="registerUser"),
    path('Inicio',Inicio,name='PaginaInicio'),
    path('Catalogo',Catalogo,name='Catalogoprincipal'),
    path('productos',productos,name='productos'),
    path('api/', include(router.urls)),
]