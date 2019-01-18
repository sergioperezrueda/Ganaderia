const express = require('express');
const { Animal, Cliente } = require('./models');

const router = express.Router();

// ver todos los Clientes
router.get('/clientes', (req, res) => {

  Cliente.find({}, (err, data) => {
    if (err) res.json({ error: err })
    else res.json(data)
  });
});

// ver un Cliente
router.get('/clientes/:id', (req, res) => {
  Cliente.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err })
    else res.json(data)
  });
});

// actualizar un Cliente
router.put('/clientes/:id', (req, res) => {
  Cliente.findOneAndUpdate(
    {_id: req.params.id},
    {$set: { nombre: req.body.nombre, correo: req.body.correo }},
    (err, data) => {
      if (err) res.json({ error: err })
      else res.json(data)
    });
});

// insertar un Cliente
router.post('/clientes', (req, res) => {
  const cliente = new Cliente({
    nombre:req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono,
    zonaDeEnvio: req.body.zonaDeEnvio
});
  cliente.save((err, data) => {
    if (err) res.json({ error: err })
    else res.json(data)
  });
});

module.exports = router
