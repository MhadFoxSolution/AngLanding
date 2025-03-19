const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { request } = require('http');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));

app.use(require('./routes/correoRouter'));

app.listen(3000, () => {
console.log('Servidor corriendo')
});