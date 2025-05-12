const  Router  = require('express');

const ruta = Router();

//////////////////////////////////////////

// Ver lista de usuarios
ruta.get('/', (req, res) => {
    res.send('Lista de usuarios')
});

// Crear un usuario
ruta.post('/', (req, res) => {
    res.send('Usuario creado')
});

// Reemplaza un usuario
ruta.put('/:id', (req, res) => {
    res.send(`Usuario ${req.params.id} reemplazado`)
});

// modifica un usuario
ruta.patch('/:id', (req, res) => {
    res.send(`Usuario ${req.params.id} modificado`)
});

// Eliminar un usuario
ruta.delete('/:id', (req, res) => {
    res.send(`Usuario ${req.params.id} eliminado`)
})

/////////////////////////////////////////

module.exports = ruta;