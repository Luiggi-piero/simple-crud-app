const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

const app = express();

// middleware
app.use(express.json());


// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the Backend ⚡')
});

mongoose.connect("mongodb+srv://luiggi:K6lumHRQCP0gzC9A@cluster0.pro57gv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to database ✅');
        app.listen(3000, () => {
            console.log('Server is running on port 3000 ✅');
        })
    })
    .catch(() => {
        console.log('Connection failed ❌');
    })



/**
 * npm i express
 * npm i nodemon -D  : reinica el servidor en cada cambio, crea el script 
 * npm i mongodb
 * npm i mongoose  : orm con mongodb
 */