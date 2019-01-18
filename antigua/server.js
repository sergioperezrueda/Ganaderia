//IMPORTACIONES
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
//middleware
//archivos estaticos
app.use(express.static(path.join(__dirname , 'public')));
app.use(morgan('dev'));
app.use ('/api', routes);
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ganaderia', { useNewUrlParser: true})
.then( db => console.log('Conexión correta a la BD'))
.catch(err => console.log('Error en la conexión a la BD'));

//puerto de escucha
app.listen (3000, () => console.log('Servidor iniciado en puerto 3000'));



      