# Servidor rest con mongoose

El servidor rest esta montado con el proyecto [express-restify-mongoose](https://github.com/florianholzapfel/express-restify-mongoose) 

Une todo piezas buenas, express para gestionar el server, restify, para la creacion del rest, y Mongoose como interfaz de mongo.


#Rescato notas del proyecto a modo de chuleta

Posibles peticiones:

```
GET http://localhost/api/v1/Customers/count
GET http://localhost/api/v1/Customers
PUT http://localhost/api/v1/Customers
POST http://localhost/api/v1/Customers
DELETE http://localhost/api/v1/Customers

GET http://localhost/api/v1/Customers/:id
GET http://localhost/api/v1/Customers/:id/shallow
PUT http://localhost/api/v1/Customers/:id
POST http://localhost/api/v1/Customers/:id
DELETE http://localhost/api/v1/Customers/:id
```````

### Query
```
GET http://localhost/api/v1/Customers?name=~regex
GET http://localhost/api/v1/Customers?name=value
GET http://localhost/api/v1/Customers?name=>value
GET http://localhost/api/v1/Customers?name=>=value
GET http://localhost/api/v1/Customers?name=<value
GET http://localhost/api/v1/Customers?name=<=value
GET http://localhost/api/v1/Customers?name=!=value
GET http://localhost/api/v1/Customers?select=name
GET http://localhost/api/v1/Customers?select=-name
```
