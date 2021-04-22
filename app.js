const express = require('express');
const app = express();
const path = require('path');
//const methodOverride = require('method-override');
const puerto = process.env.PORT; 

// Donde estan los gerentes de ruteo
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const publicPath = path.resolve(__dirname, './public') ;
app.use(express.static(publicPath));

// configuro EJS
app.set('view engine', 'ejs');

// URL encode para que nos pueda llegar la info desde el formulario
app.use(express.urlencoded({extended: false}));
// Middleware que se encarga de controlar la posibilidad de usar delete y put
//app.use(methodOverride('_method'));

// llamo al ruteo
app.use('/', homeRoutes);
//app.use('/', userRoutes);
app.use('/product', productRoutes);


app.listen(puerto || 3000, () => {
    console.log('El servidor esta corriendo en el puerto 3000');
});