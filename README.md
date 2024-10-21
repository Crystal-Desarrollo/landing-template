### Requisitos

1. PHP ˆ8.3
2. NODE ˆ20
3. Mysql 8+
4. Composer ˆ2.5.5

### Stack

- Laravel
- React
- Inertia
- Tailwind

### Instalación

1. Copiar el archivo .env.example a otro que se llame .env
2. Correr el comando `composer install`
3. Correr el comando `npm install`
4. Correr el comando `php artisan key:generate`
5. Correr el comando `php artisan storage:link`
6. Configurar los datos del usuario Super Admin en el archivo .env en las variables `ADMIN_EMAIL` y `ADMIN_PASSWORD`.
6. Los siguentes 2 pasos nos permiten conectarnos con una base de datos local de Sqlite. Para utilizar otra base
   de datos, se deben modificar las siguientes variables del archivo .env con los datos correspondientes.
    - DB_CONNECTION
    - DB_HOST
    - DB_PORT
    - DB_DATABASE
    - DB_USERNAME
    - DB_PASSWORD
7. Correr el comando `php artisan migrate --seed`. Este comando nos preguntará si queremos crear una nueva base de
   datos, debemos responder que si.
8. Un nuevo archivo `database/database.sqlite` aparecerá en la carpeta raiz del proyecto. Alli estará contenida la DB
   del proyecto
9. Correr el comando `php artisan serve`
10. En otra consola, correr el comando `npm run dev`
11. Abrir el navegador en la url `http://localhost:8000`.

### Correos electrónicos

Por defecto los emails serán enviados usando el mailer `log`, esto significa que al enviar un correo se podrá ver su
contenido plano en el archivo `laravel.log` o el archivo de logs configurado si hubiera sido modificada la configuración

Para poder comprobar el diseño de los correos se puede utilizar algun servicio como Mailtrap. Para poder hacer
uso de este servicio es necesario crear una cuenta en su página web y configurar los siguientes datos en el archivo
.env:

- MAIL_MAILER=
- MAIL_HOST=
- MAIL_PORT=
- MAIL_USERNAME=
- MAIL_PASSWORD=

Todos estos datos los podrás encontrar en la página de Mailtrap, dentro de "My Inbox" y luego en "Integrations". En el
desplegable, seleccionar Laravel 9+ y copiar los datos en el archivo .env.

Además de Mailtrap, existen otras alternativas para el envío de correos electrónicos, como Mailgun, Sendgrid, etc.
Cualquiera de estas opciones puede ser utilizada.

### Configuración Any Pass

Any Pass es un paquete que permite hacer un bypass a la autenticación de cualquier usuario, lo que permite iniciar
sesión con cualquier usuario sin necesidad de conocer su contraseña.
Para su funcionamiento es necesario configurar el archivo .env con los siguientes datos:

- APP_ENV=local
- APP_DEBUG=true
- ANY_PASS=true

Si alguna de esta 3 variables no se envuentra en el archivo .env o tiene un valor distinto al indicado, Any Pass no
funcionará.
