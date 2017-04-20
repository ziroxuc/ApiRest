'use strict'

const express = require('express');
const api = express.Router();
const auth = require("../middlewares/auth.js"); 
const userCtrl = require("../controllers/user.js");

const ProductCtrl = require('../controllers/product');

api.get('/product',auth, ProductCtrl.getProducts);

api.get('/product/:productId', ProductCtrl.getProducts);

api.post('/product', ProductCtrl.saveProduct);

api.put('/product/:productId', ProductCtrl.updateProduct);

api.delete('/product/:productId', ProductCtrl.deleteProduct);

api.post('/signup', userCtrl.signUp);

api.post('/signin', userCtrl.signIn);

api.get('/private', auth, (req,res) => {
    res.status(200).send({message: "Tienes acceso!"});
})

module.exports = api;