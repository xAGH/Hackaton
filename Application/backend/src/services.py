import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from os import getenv

class Services():
    
    def send_email(self, user_email):
        message = f"""
        <center>
    <div 
style="padding: 0%;
    margin: 0%;
    width: 75%;
    height: 100%;
    border:1px solid rgba(0,0,0,0.25);
    padding: 24px;
    border-radius: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">

    <br style="clear: both;">

    <center>
    <h1 style="font-weight: 400;">
        Hola
    </h1>
    <br>
    <h2 style="font-weight: 400; font-size:24px;">
        ¡Gracias por suscribirte a nuestras noticias!
    </h2>
    <h2 style="font-weight: 400;">
        Para recibir noticias a tu correo sobre <strong>catastrofes naturales</strong> y <strong>recomendaciones</strong> que pueden salvar tu vida...
        <br><br>
        <a
            style="color: white;
                padding: 10px;
                border-radius: 50px;
                background-color: rgb(10, 137, 255);
                font-style: none;
                text-decoration: none;
                font-size: 1.3rem;"
            href="{getenv("BASE_URL")}/api/usuarios/{user_email}?action=patch">
            Confirma tu cuenta
        </a>
        <br>
        <br>
        <br>
        <a
            style="color: white;
                padding: 10px;
                border-radius: 50px;
                background-color:red;
                font-style: none;
                text-decoration: none;
                font-size: 1.3rem;"
            href="{getenv("BASE_URL")}/api/usuarios/{user_email}?action=delete">
            Eliminar suscripción
        </a>
    </h2>
    </center>
</div>
</center>"""
        email = getenv("EMAIL_ACCOUNT")
        msg = MIMEMultipart()
        msg['From'] = email
        msg['To'] = user_email
        msg['Subject'] = "Please confirm your email"

        msg.attach(MIMEText(message, 'html'))

        mailServer = smtplib.SMTP('smtp.live.com',587)
        mailServer.starttls()
        mailServer.login(email, getenv("EMAIL_PASSWORD"))

        mailServer.sendmail(email, user_email, msg.as_string())
        mailServer.close()

