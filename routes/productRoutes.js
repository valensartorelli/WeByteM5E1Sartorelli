const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();
const multer = require('multer');

router.get('/', productController.index);

router.get('/create', productController.create);

router.get('/edit', productController.edit);

router.get('/:id', productController.detail);

router.get('/:id/edit', productController.edit);

router.put('/edit/:id', productController.store);

router.delete('/:id', productController.delete);

module.exports = router;