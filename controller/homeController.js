let visitados = require('../data/datosProductos');

// Leo los elementos del array del archivo data
let homeController = {
    leerTodos: function() {
        console.log('leo productos desde data');
        return visitados
    }
}

module.exports = homeController;