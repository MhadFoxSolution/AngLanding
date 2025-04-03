const express = require('express');
const app = express();

let envio = require('../controllers/correoController');

// Ruta para enviar correos
app.post('/envio', envio.envioCorreo);

module.exports = app;
