# Stockify

## Práctica 4:

### MUY IMPORTANTE: USO:
Para usarlo hay que ejecutar el backend en el puerto 8080 (por defecto) para que funcione con el front. Como verá tengo el front y el backend en dos carpetas diferentes. Para ejecutar el backend hay que ponerse en la carpeta stockify-api. La web se puede acceder desde [aquí](https://carlos-ag.github.io/202010774-GITT-PAT-practica-4/Stockify/html/index.html)

### Endpoints:

En esta práctica se ha realizado el Backend de la página web Stockify. Para ello se ha usado Spring Boot y Java. Se ha incluido los siguientes endpoints, ya incorporados en la página web:
- /portfolio (GET): Devuelve la información de la cartera de acciones del usuario.
- /movement (POST): Añade un movimiento a la cartera de acciones del usuario.
- /contact (POST): Añade un mensaje para el equipo de Stockify.
- /upload (POST): Añade un archivo CSV con los movimientos de la cartera de acciones del usuario.
- /download (GET): Descarga un archivo CSV con los movimientos de la cartera de acciones del usuario.

En todas las páginas en las que aparecen estos endpoints se ha añadido una verificación de que el backend está funcionando correctamente (health check). Si no lo está, se muestra un mensaje de error en el frontend. 
Además hay mensajes de error en el frontend para cuando se produce un error en el backend. Por ejemplo, si se subir un CSV con un formato incorrecto, se muestra un mensaje de error en el frontend y obviamente no se cambia el archivo que estaba previamente.
Se dispone de un registro de log, y los datos que se envían al servidor se almacenan en los ficheros contactMessages.csv y portfolioMovements.csv (que este ultimo es el fichero que se cambia / descarga con el /upload o el /download). Por lo que verá que si añade un movimiento a la cartera de acciones, se almacena en el fichero portfolioMovements.csv y si envía un mensaje de contacto, se almacena en el fichero contactMessages.csv. Y claro, si vuelve a inicializar la página web sus datos siguen ahí y verá su cartera de acciones y los mensajes de contacto que ha enviado.

Un movimiento de la cartera de acciones se compone de los siguientes datos:
- Nombre de la acción (Ticker)
- Número de acciones
- Precio de compra
- Fecha de compra
Para el post se ha realizado una validación de datos tanto en el frontend (ya realizada en la práctica anterior) como en el backend. En el backend se ha comprobado el tipo de datos y que no sean nulos. Además se ha comprobado que el número de acciones sea mayor que 0. También se ha comprobado que la fecha de compra sea anterior a la fecha actual. Si cualquiera de estas condiciones no se cumple, se devuelve un error 400 Bad Request y una alerta en el frontend para que el usuario sepa que ha ocurrido un error.

### Loggers:
Se han añadido loggers en el backend para que se puedan ver los movimientos que se realizan en la página web. Estos loggers se almacenan en el fichero application.txt. Para ello se ha usado la librería log4j2.

### Actuator:
Se ha añadido el actuator para poder ver los endpoints disponibles en la página web. Para ello se ha usado la librería spring-boot-starter-actuator. Para ver los endpoints disponibles se puede acceder a la siguiente dirección: http://localhost:8080/actuator 
Sobre todo se ha usado el endpoint /actuator/health para comprobar que el backend está funcionando correctamente y si no es así, se muestra un mensaje de error en el frontend. Este mensaje podríamos verlo en la pestaña Portfolios de la página web ya que es la que necesita del backend para funcionar.

### IMPORTANTE:
Para ejecutar la API hace falta ponerse desde la carpeta stockify-api.
El frontend y el backend están separados (Stockify y stockify-api respectivamente)




## Uso:
Para visualizar la página web desde un navegador se puede acceder al siguiente enlace [Stockify](https://carlos-ag.github.io/202010774-GITT-PAT-practica-3/Stockify/html/index.html)

## Documentación:
Para editarla la página web en VSCODE, hay que abrir la carpeta Stockify, que no incluye el README.md.

## IMPORTANTE:
- API Noticias (100 noticias por día) (en principio *5 ya que he puesto 5 api keys diferentes)
- API Autocompletado (5 por minuto) compartidas con la API de cotización de acciones


### Introducción:
Está página web está siendo realizada en el cuadro de PROGRAMACIÓN DE APLICACIONES TELEMÁTICAS. 

La utilidad de la página es el de facilitar información al usuario sobre su cartera de acciones y permitirle en unos minutos tener un resumen de la evolución de esta en los últimos días/meses/años. 

La página web funciona tanto en ordenadores como en dispositivos móviles y además es responsive, es decir, se adapta al tamaño de la pantalla del dispositivo en el que se visualiza. Verá que los colores del header también cambian para que quede bonita en cualquier dispositivo.

Las técnologías usadas por el momento son HTML, CSS, Javascript, Python y Plotly.

Para familiarizarnos con los frameworks, hemos incluido Bootstrap en la página de login.

También se ha usado SASS para facilitar el desarrollo de los archivos CSS. Para ello se ha usado la extensión de VSCode llamada Live Sass Compiler, que compila los archivos SASS a CSS en tiempo real. Se ha configurado esta extensión para que guarde los archivos en la carpeta CSS (y no en la carpeta SASS).

### Instalación:
Necesita un editor de texto como puede ser VSCode y un navegador para visualizar la página web.
Si lo desea para facilitar el desarrollo de la página web puede la extensión de VSCode llamada Live Server que sirve para ver en directo los cambios realizados en el HTML sin necesidad de recargar la página web. También recomendamos el uso de Live Sass Compiler para facilitar el desarrollo de los archivos CSS ya que compila los archivos SASS a CSS en tiempo real.
