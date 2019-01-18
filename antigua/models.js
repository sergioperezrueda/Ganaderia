const mongoose = require('mongoose');

const Animal  = mongoose.model('Animal', new mongoose.Schema( { 
    genero: String ,
    nacimiento: Date,
    especie: String
})
);

const Cliente = mongoose.model('Cliente', new mongoose.Schema( { 
        nombre: String, 
        correo: String,
        telefono: Number,
        zonaDeEnvio: String
    }));
        
module.exports =  {
            Animal,
            Cliente
        };

