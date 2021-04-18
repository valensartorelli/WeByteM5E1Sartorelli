const express = require('express');
const router = express.Router();
const controladorProducts = require('../controller/productController');

router.get('/', (req, res) => {
    res.render('listadoProductos');
})

router.get('/detail', (req, res) => {
    res.render('detalleProducto');
})

router.get('/new', (req, res) => {
    res.render('formularioAlta');
})

router.get('/actions', (req, res) => {
    res.render('formularioDetalle');
})

router.get('/edit', (req, res) => {
    res.render('formularioEdicion');
})

module.exports = router;