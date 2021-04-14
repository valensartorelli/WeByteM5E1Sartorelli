const express = require('express');
const app = express();
const path = require('path');
const puerto = process.env.PORT; 

const publicPath = path.resolve(__dirname, './public') ;
app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('home');
});
app.get('/register.html', (req,res) => {
    res.render('register');
});
app.get('/login.html', (req,res) => {
    res.render('login');
});

app.listen(puerto || 3000, () => {
    console.log('El servidor esta corriendo en el puerto 3000');
});