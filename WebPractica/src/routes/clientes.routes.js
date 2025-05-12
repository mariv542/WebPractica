const  Router  = require('express');

const ruta = Router();

//////////////////////////////////////////

//Ver clientes
ruta.get('/', (req, res) => {
    res.send('Lista de clientes')
});

//Crear clientes
ruta.post('/', (req, res) => {
    res.send('Cliente creado')
}); 
 
//Reemplazar producto
ruta.put('/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} reemplazado`)
});

// Modificar parte del producto
ruta.patch('/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} modificado`)
});

// Eliminar cliente
ruta.delete('/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} eliminado`)
});

/////////////////////////////////////////

module.exports = ruta;





