from src.app import Aplication

def main():
    app = Aplication.create_app()
    app.run(port=4000, debug=True, load_dotenv=True)

if __name__ == '__main__':
    main()