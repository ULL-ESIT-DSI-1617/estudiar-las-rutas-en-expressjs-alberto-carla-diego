var express = require('express');
var path = require('path');

// instanciar
var app = express();
app.use(express.static(path.resolve('middleware/html'))); //ponemos ruta por defecto relativa


// escuchar
app.listen(8080);

console.log("Servidor Express escuchando en modo %s", app.settings.env + " por el puerto: 8080");
