let visitados = require('../data/datosProductos');

// Leo los elementos del array del archivo data
let productController = {
    leerTodos: function() {
        console.log('leo productos desde data');
        return visitados
    }
}

module.exports = productController;