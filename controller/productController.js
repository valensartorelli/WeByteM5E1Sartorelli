let visitados = require('../data/datosProductos');

let productController = {
    index: (req, res) => {
        return res.render('products', {products})
    },
    detail: (req, res) => {
        //return res.render('formularioDetalle', { visitados })
        let product = visitados.find(function(value) {
            return value.id === req.params.id;
        })
        if (product) {
            res.render('detalleProducto', {product});
        } else {
            res.render('error 404');
        }
    },
    create: (req, res) => {
        return res.render('formularioAlta');
    },
    edit: (req, res) => {
        return res.render('formularioEdicion');
    },
    store: (req, res) => {
        const body = req.body;
        return res.send(body)
    },
    delete: (req, res) => {
        
    }
}


module.exports = productController;