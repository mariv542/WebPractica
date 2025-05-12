const  Router  = require('express');

const ruta = Router();

//////////////////////////////////////////

//Ver Productos
ruta.get('/',(req,res) => {
    res.send('Lista de productos')
});

//Crear Producto
ruta.post('/', (req, res) => {
    res.send('Producto creado')
});

//Reemplazar producto
ruta.put('/:id', (req, res) => {
    res.send(`Producto ${req.params.id} reemplazado`)
});

//Modifica parte del producto
ruta.patch('/:id', (req, res) => {
    res.send(`Producto ${req.params.id} modificado`)
});

//elimina producto
ruta.delete('/:id', (req, res) => {
    res.send(`producto ${req.params.id} eliminado`)
})

/////////////////////////////////////////

module.exports = ruta;