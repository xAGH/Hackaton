from flask import jsonify, make_response, request
from flask.views import MethodView
from src.models import Database
from src.services import Services

class PaisesController(MethodView):

    def __init__(self):
        self.model = Database()

    def get(self):
        code = request.args.get("code")
        if code is None:
            data = self.model.getAll("paises")
            return make_response(jsonify({
                "response": data,
            }), 200)
        code = code.upper()
        data = self.model.getOne("paises", {"codigo": code})
        return make_response(jsonify({
            "response": data if data != None else [],
        }), 200)

    def post(self):
        if request.is_json:
            try:
                nombre = request.json.get("nombre")
                codigo = request.json.get("codigo")
                bandera = request.json.get("bandera")
                numeros = request.json.get("numeros")

                if nombre != None and codigo != None and bandera != None and numeros != None:
                    self.model.insert("paises", [{"nombre":nombre, "codigo":codigo, "bandera":bandera, "numeros":numeros}])

                    return make_response(jsonify({
                        "response": "Se ha registrado el pais",
                    }), 200)

            except:
                pass

        return make_response(jsonify({
                "response": "Error, send me a json format",
                "expected_data":{"nombre":"pais", "codigo":"codigo", "bandera":"ruta", "numeros":[{"especialidad":"numero"}]},
                "status":400
            }), 400)

class UsuariosController(MethodView):

    def __init__(self):
        self.model = Database()
        self.service = Services()

    def post(self):
        if request.is_json:

            email = request.json['email']
            verify_email = self.model.getOne("usuarios", {"email": email})

            if verify_email is None:
                res = self.model.insert("usuarios", [{"email": email, "active": False}])
                self.service.send_email(email)
                return make_response(jsonify({
                    "response": "Se ha registrado el correo",
                    "content": res,
                    "status":200
                }), 200)

            elif verify_email.get("active"):
                return make_response(jsonify({
                        "response": "El correo ya está registrado y activado",
                        "status":200
                    }), 200)

            return make_response(jsonify({
                        "response": "El correo ya está registrado pero no esta activado.",
                        "status":200
                    }), 200)

        return make_response(jsonify({
                "response": "Error, send me a json format",
                "expected_data":{"email":"Jhon@Doe.com"},
                "status":400
            }), 400)

    def delete(self):
        if request.is_json:
            try:
                email = request.json['email']
                self.model.delete("usuarios", {"email": email})
                return make_response(jsonify({
                "response": "Usuario eliminado",
                "status":200
            }), 200)

            except:
                pass

        return make_response(jsonify({
                "response": "Error, send me a json format",
                "expected_data":{"email":"Jhon@Doe.com"},
                "status":400
            }), 400)

    def get(self):
        data = self.model.getAll("usuarios")
        return make_response(jsonify({
            "response": data,
            "status":200
        }), 200)

    def put(self):
        if request.is_json:
            try:
                email = request.json['email']
                self.model.update("usuarios", {"email":email}, {"active":True})
                return make_response(jsonify({
                    "response": "Usuario actualizado correctamente.",
                    "status":200
                }), 200)

            except:
                pass

        return make_response(jsonify({
                "response": "Error, send me a json format",
                "expected_data":{"email":"Jhon@Doe.com"},
                "status":400
            }), 400)

class ArticulosNoticiasController(MethodView):
    
    def __init__(self):
        self.model = Database()

    def get(self):
        data = self.model.getAll("noticias")
        return make_response(jsonify({
            "response": data,
            "status": 200
        }), 200)

    def post(self):
        if request.is_json:

            texto = request.json["texto"]
            img = request.json["img"]

            process = self.model.insert("noticias", [{"texto": texto, "img": img}])

            return make_response(jsonify({
                        "response": process,
                        "status":200
                    }), 200)

        return make_response(jsonify({
                "response": "Error, send me a json format",
                "expected_data":{"email":"Jhon@Doe.com"},
                "status":400
            }), 400)



class ArticulosRecomendacionesController(MethodView):

    def __init__(self):
        self.model = Database()

    def get(self):
        data = self.model.getAll("recomendaciones")
        return make_response(jsonify({
            "response": data,
            "status": 200
        }), 200)

    def post(self):
        if request.is_json:

            texto = request.json["texto"]
            img = request.json["img"]

            process = self.model.insert("recomendaciones", [{"texto": texto, "img": img}])

            return make_response(jsonify({
                        "response": process,
                        "status":200
                    }), 200)

        return make_response(jsonify({
                "response": "Error, send me a json format",
                "expected_data":{"email":"Jhon@Doe.com"},
                "status":400
            }), 400)