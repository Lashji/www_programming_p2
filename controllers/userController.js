'use strict'

const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("config");
const jwtConfig = config.get("jwt");
const User = require("../models/user");


module.exports = {
	// listItems(req, res) {
	// 	let list = ["1, 2, 3"]
	// 	res.json(list)
	// },
	// showItem(req, res) {
	// 	let id = req.params.id
	// 	res.json({
	// 		id: id
	// 	})
	// }

	async authenticateUser(req, res, next) {
		console.log("User tried logging in", req.body)

		passport.authenticate("local", {
			session: false
		}, (err, user, info) => {
			if (err || !user) {
				return res.status(400).json({
					error: "Login failed, please check username and password",
					user: user,
				});
			}

			req.login(user, {
				session: false
			}, (err) => {
				if (err) {
					res.send(err);
				}

				const token = jwt.sign({
					id: user.id,
					role: user.role
				}, jwtConfig.key, {
					algorithm: "HS256"
				});
				return res.json({
					token
				});
			})
		})(req, res, next);
	},

	async createUser(req, res, next) {
		let user = await User.findOne({
			email: req.body.email
		});
		if (user) {
			res.status(409).json({
				error: "Email already in use"
			});
		} else {
			user = new User();
			user.name = req.body.name;
			user.email = req.body.email;
			user.password = req.body.password;
			await user.save();

			res.status(200).json({
				message: "Registration succesful, you can now login"
			});
		}
	}
}