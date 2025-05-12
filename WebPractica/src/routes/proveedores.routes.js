const  Router  = require('express');

const ruta = Router();

//////////////////////////////////////////

// Ver proveedores
ruta.get('/', (req, res) => {
    res.send('Lista de proveedores')
});

// Crear proveedor
ruta.post('/', (req, res) => {
    res.send('Proveedor creado')
});

// reemplaza el proveedor por completo
ruta.put('/:id', (req, res) => {
    res.send(`Proveedor ${req.params.id} reemplazado`)
});

// remplaza parte del proveedor
ruta.patch('/:id', (req, res) => {
    res.send(`Proveedor ${req.params.id} modificado`)
});

// Elimina proveedor
ruta.delete('/:id', (req, res) => {
    res.send(`Proveedor ${req.params.id} eliminado`)
})

/////////////////////////////////////////

module.exports = ruta;