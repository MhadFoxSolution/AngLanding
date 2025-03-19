const {request,response} = require('express');
const Module = require('module');
const nodemailer = require('nodemailer');

const envioCorreo = (req=request,resp=response) =>{
    let body = req.body;

    let config = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        secure: false, 
        auth:{
            user:'mhad.fox.solution@gmail.com',
            pass:'ykfa lago bpks vflg'
        }

    });

    const opciones = {
        from: "Programación",
        subject : body.asunto,
        to: body.email,
        text: body.mensaje
    };

    config.sendMail(opciones, function(error, result) {  // 🔹 Corrección de sintaxis
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


module.exports= {
    envioCorreo
};
