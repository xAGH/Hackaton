from os import getenv
from flask import Flask
from src.routes import routes
from flask_cors import CORS

app = Flask(__name__)
secret = getenv("SECRET_KEY")

app.add_url_rule(routes["paises"], view_func=routes["paises_controller"])
app.add_url_rule(routes["usuarios"], view_func=routes["usuarios_controller"])
app.add_url_rule(routes["articulos/recomendaciones"], view_func=routes["articulos/recomendaciones_controller"])
app.add_url_rule(routes["articulos/noticias"], view_func=routes["articulos/noticias_controller"])

CORS(app, resources={
               r"/*": {
                   "origins": "*"
               }
            })

if __name__ == '__main__':
    app.run(port=4000, debug=getenv("DEBUG"), load_dotenv=True)