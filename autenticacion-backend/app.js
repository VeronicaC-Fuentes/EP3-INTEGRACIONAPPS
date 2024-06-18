const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const authRutas = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/autenticacion-ep3');

app.use(bodyParser.json());

app.use('/api/auth', authRutas);

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

// Ruta básica para la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

