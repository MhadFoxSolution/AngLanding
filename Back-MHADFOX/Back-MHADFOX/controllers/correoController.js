const { request, response } = require('express');
const nodemailer = require('nodemailer');

// Función para enviar correos
const envioCorreo = (req = request, resp = response) => {
  let body = req.body;

  // Configuración del transportador con nodemailer
  let config = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Sin conexión segura (STARTTLS)
    auth: {
      user: process.env.EMAIL_USER, // Usuario desde .env
      pass: process.env.EMAIL_PASS  // Contraseña desde .env
    }
  });

  // Opciones del correo
  const opciones = {
    from: "Programación", // Remitente
    subject: body.asunto, // Asunto del correo
    to: body.email,       // Destinatario
    text: body.mensaje    // Mensaje del correo
  };

  // Envío del correo
  config.sendMail(opciones, function (error, result) {
    if (error) {
      return resp.json({ ok: false, msg: error });
    }

    return resp.json({
      ok: true,
      msg: "Correo enviado correctamente",
      result
    });
  });
};

module.exports = {
  envioCorreo
};
