const  Router  = require('express');

const clientesRoutes = require('./clientes.routes');
const productosRoutes = require('./productos.routes');
const proveedoresRoutes = require('./proveedores.routes');
const usuariosRoutes = require('./usuarios.routes');

const ruta = Router();

//////////////////////////////////////

ruta.get('/', (req, res) => {
    res.send('ruta raiz');
});

ruta.get('/alternativa', (req, res) => {
    res.send('ruta alternativa');
});

////////////////////////////////////
ruta.use('/productos', productosRoutes);
ruta.use('/cliente', clientesRoutes);
ruta.use('/proveedor', proveedoresRoutes);
ruta.use('/usuario', usuariosRoutes);

module.exports = ruta;