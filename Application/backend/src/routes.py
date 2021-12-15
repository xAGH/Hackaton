from src.controllers import *

routes = {
    "paises": "/api/lista_paises", "paises_controller": PaisesController.as_view("paises"),
    "usuarios": "/api/usuarios", "usuarios_controller": UsuariosController.as_view("usuarios"),
}
