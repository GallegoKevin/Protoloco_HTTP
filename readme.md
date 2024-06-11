# PROTOCOLO HTTP
Es el lenguaje común que permite la comunicación entre navegadores web y servidores, facilitando la transferencia de datos y la visualización de contenido en la World Wide Web.

![imagen](https://i.ibb.co/jbDxjtZ/c7a83413-0888-4f3d-856b-5b63827f241c-1.jpg)

## Estructura Básica de la Comunicación HTTP

- **Cliente-Servidor**: El cliente ( el usuario en el navegador) envía una solicitud (request) al servidor, el cual procesa la solicitud y envía una respuesta (response) de vuelta al cliente.

- **Solicitud (Request)**: Incluye información como el método HTTP (verbo), la URL, las cabeceras (headers), y opcionalmente un cuerpo (body).
  
- **Respuesta (Response)**: Contiene el resultado de la solicitud, que incluye un código de estado (status code), cabeceras (headers), y opcionalmente un cuerpo (body).


## Componentes de una Respuesta HTTP

- **Línea de Estado (Status Line)**: Contiene la versión del protocolo, el código de estado, y una frase descriptiva.
  
- **Cabeceras (Headers)**: Proveen información adicional sobre la comunicación entre el cliente y el servidor, tales como el tipo de contenido que se está enviando o recibiendo, las credenciales de autenticación, y las directivas de caché.

- **Cuerpo (Body)**: Contiene los datos que se envían al servidor (en las solicitudes POST y PUT) o los datos que se devuelven al cliente (en las respuestas).

## HTTP (Verbos)

- **GET**: Se utiliza para solicitar datos de un servidor.
- **POST**: Se utiliza para enviar datos al servidor.
- **PUT**: Se utiliza para actualizar un recurso existente en el servidor.
- **DELETE**: Se utiliza para eliminar un recurso del servidor.

## Códigos de Estado HTTP: 

Los códigos de estado HTTP se clasifican en cinco categorías:

- **1xx (Informativos)**: Indican que la solicitud fue recibida y el proceso continúa.
  - **100 Continue**
  
- **2xx (Éxito)**: Indican que la solicitud fue recibida, entendida y aceptada correctamente.
  - **200 OK**
  
- **3xx (Redirección)**: Indican que se requiere una acción adicional para completar la solicitud.
  - **301 Moved Permanently**
  
- **4xx (Errores del Cliente)**: Indican errores de la solicitud del cliente.
  - **404 Not Found**
  
- **5xx (Errores del Servidor)**: Indican errores en el servidor al intentar procesar la solicitud.
  - **500 Internal Server Error**

## Flujo de Trabajo HTTP

1. **El cliente** envía una solicitud HTTP al servidor especificando la URL y el método HTTP.
2. **El servidor** procesa la solicitud y devuelve una respuesta HTTP con el código de estado, las cabeceras y opcionalmente un cuerpo.
3. **El cliente** recibe la respuesta y puede procesarla o mostrar el contenido al usuario.


## CRUD en el Contexto de HTTP

CRUD es un acrónimo que describe las cuatro operaciones básicas que se pueden realizar en una base de datos o en una API.

- **Create (Crear)**: Se utiliza el método **POST** para crear un nuevo recurso.

- **Read (Leer)**: Se utiliza el método **GET** para leer o recuperar un recurso existente.

- **Update (Actualizar)**: Se utiliza el método **PUT** para actualizar un recurso existente.

- **Delete (Eliminar)**: Se utiliza el método **DELETE** para eliminar un recurso.