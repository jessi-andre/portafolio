const express = require('express');
const app = express();
const path = require('path');
const port = 3030;


app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', '/index.html')))
app.get('/perfil', (req, res) => res.sendFile(path.join(__dirname, 'views', '/perfil.html')));
app.get('/experiencia', (req, res) => res.sendFile(path.join(__dirname, 'views', '/experiencias.html')));
app.get('/habilidades', (req, res) => res.sendFile(path.join(__dirname, 'views', '/habilidades.html')));





app.listen(port, () => console.log('Server running in port' + port))