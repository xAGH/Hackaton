from src.controllers import *

routes = {
    "paises": "/api/lista_paises", "paises_controller": PaisesController.as_view("paises"),
    "usuarios": "/api/usuarios", "usuarios_controller": UsuariosController.as_view("usuarios"),
    "articulos/noticias": "/api/articulos/noticias", "articulos/noticias_controller": ArticulosNoticiasController.as_view("articulos/noticias"),
    "articulos/recomendaciones": "/api/articulos/recomendaciones", "articulos/recomendaciones_controller": ArticulosRecomendacionesController.as_view("articulos/recomendaciones"),

}
