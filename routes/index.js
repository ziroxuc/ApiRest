'use strict'

const express = require('express');
const api = express.Router();
const auth = require("../middlewares/auth.js"); 

const ProductCtrl = require('../controllers/product');

//RUTA GET todos los productos
api.get('/product', ProductCtrl.getProducts);

//RUTA GET DE A UNO
api.get('/product/:productId', ProductCtrl.getProducts);

//RUTA POST todos los productos
api.post('/product', ProductCtrl.saveProduct);

//RUTA PUT de uno
api.put('/product/:productId', ProductCtrl.updateProduct);

//RUTA DELETE de uno
api.delete('/product/:productId', ProductCtrl.deleteProduct);

api.get('/private', auth, (req,res) => {
    res.status(200).send({message: "Tienes acceso!"});
})

module.exports = api;