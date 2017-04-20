'use strict'

const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../service');

function signUp(req, res) {
	const user = new User({
		email: req.body.email,
		displayName: req.body.displayName,
		password: req.body.password

	});

	user.save((err) => {
		if (err) res.status(500).send({ message: "error al crear usuario" });

		return res.status(200).send({ token: service.createToken(user) })
	})

}

function signIn(req, res) {

	User.find({email: req.body.email}, (err, user) =>{
		if(err) res.status(500).send({message:err});
		if(!user) res.status(404).send({message:"No existe el Usuario"});

		req.user = user;
		res.status(200).send({
			message:"Logeado correctamente",
			token: service.createToken(user)
		})

	})

}

module.exports = {
	signUp,
	signIn
}