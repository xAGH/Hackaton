from flask import jsonify, make_response, request
from flask.views import MethodView
from src.models import Database
from src.services import Services


class PaisesController(MethodView):

    def __init__(self):
        self.model = Database()
        self.services = Services()

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
        return make_response(jsonify({
            "response": "Se ha registrado el pais",
        }), 200)


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
                        "status":400
                    }), 400)

            return make_response(jsonify({
                        "response": "El correo ya está registrado pero no esta activado.",
                        "status":400
                    }), 400)

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

    def patch(self):
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
