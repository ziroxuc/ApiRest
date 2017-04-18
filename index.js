'use strict'

const mongoose = require('mongoose');

const app = require('./app');

const config = require('./config');


mongoose.connect(config.db ,(err,res)=>{
	if(err) throw err
		console.log('Conexion a la db establecida...');

	app.listen(config.port, ()=>{

	console.log(`Api Rest escuchando en puerto ${config.port}`);

});

})
