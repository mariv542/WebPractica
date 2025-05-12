// En primer ligar se definen los modulos 
// O Librerias que necesitaremos en el proyecto
// en este caso sera solo express
 const express = require('express');
 const routes = require('./routes/index.js');
 const morgan = require('morgan');
 const config = require('./config/config.js')

 // en segundo lugar se definen los objetos
 // del sistema o propiedades del sistema
 const app = express();

 // en tercer lugar se definen las rutas o 
 // funciones que se van a ejecutar
 app.set('port', config.app.port);
 app.use(morgan('dev'));
 app.use(routes);

// en cuarto lugar se define el hilo del
// sistema, el cual escuchara cualquier
// comunicacion que llegue por url al servidor
app.listen(app.get('port'), () => {
    // le entregaremos por consola un mensaje para identificar
    // si el servicio se levanto
    console.log(`Servicio levantado: http://localhost:${app.get('port')}`);
});
