const  Router  = require('express');

const ruta = Router();

//////////////////////////////////////////

//Ver Productos
ruta.get('/',(req,res) => {
    res.send('Lista de productos')
});

//Filtrados por categoria
ruta.get('/,', (req, res) => {
    const { categoria, preciomax } = req.query;
})

//////////////////////////////////////////

//Crear Producto
ruta.post('/', (req, res) => {
    res.send('Producto creado')
});

///////////////////////////////////////////

//Reemplazar producto
//ruta.put('/:id', (req, res) => {
//    res.send(`Producto ${req.params.id} reemplazado`)
//});

// Reemplaza un producto por completo
ruta.put('/:id', (req, res) => {
    
    const id = req.params.id;
    console.log(id)
    const producto = req.body;
    res.send(`Producto ${id} reemplazado por: nombre:
         ${producto.nombre}, precio: ${producto.precio}, 
         stock: ${producto.stock}`);
});

///////////////////////////////////////////

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