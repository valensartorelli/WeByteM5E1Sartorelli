const express = require('express');
const router = express.Router();
const controladorProducts = require('../controller/productController');

router.get('/', (req, res) => {
    // leo todo el array de products en el controlador productController
    const products = controladorProducts.leerTodos();
    // envio el array product a la vista para que la recorra EJS
    console.log('volvi del controlador')

    res.render('listadoProductos', { products });
})

router.get('/detail', (req, res) => {
    // leo todo el array de products en el controlador productController
    const products = controladorProducts.leerTodos();
    // envio el array product a la vista para que la recorra EJS
    console.log('volvi del controlador')

    res.render('detalleProducto', { products });
})

router.get('/new', (req, res) => {
    // leo todo el array de products en el controlador productController
    const products = controladorProducts.leerTodos();
    // envio el array product a la vista para que la recorra EJS
    console.log('volvi del controlador')

    res.render('formularioAlta', { products });
})

router.get('/actions', (req, res) => {
    // leo todo el array de products en el controlador productController
    const products = controladorProducts.leerTodos();
    // envio el array product a la vista para que la recorra EJS
    console.log('volvi del controlador')

    res.render('formularioDetalle', { products });
})

router.get('/edit', (req, res) => {
    // leo todo el array de products en el controlador productController
    const products = controladorProducts.leerTodos();
    // envio el array product a la vista para que la recorra EJS
    console.log('volvi del controlador')

    res.render('formularioEdicion', { products });
})

module.exports = router;