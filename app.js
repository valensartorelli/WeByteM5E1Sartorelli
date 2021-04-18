const express = require('express');
const app = express();
const path = require('path');
const puerto = process.env.PORT; 

// Donde estan los gerentes de ruteo
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const publicPath = path.resolve(__dirname, './public') ;
app.use(express.static(publicPath));

// configuro EJS
app.set('view engine', 'ejs');

// llamo al ruteo
app.use('/', homeRoutes);
//app.use('/', userRoutes);
app.use('/products', productRoutes);


app.listen(puerto || 3000, () => {
    console.log('El servidor esta corriendo en el puerto 3000');
});