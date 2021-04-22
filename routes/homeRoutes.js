const express = require('express');
const router = express.Router();
const controladorHome = require('../controller/homeController');

router.get('/', (req, res) => {
    // leo todo el array de products en el controlador homeController
    const products = controladorHome.leerTodos();
    // envio el array product a la vista para que la recorra EJS
    console.log('volvi del controlador')

    res.render('home', { products });
}) 

//router.get('/', controladorHome.index);

module.exports = router;