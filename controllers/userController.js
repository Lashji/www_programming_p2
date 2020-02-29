'use strict'

const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("config");
const jwtConfig = config.get("jwt");


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
		passport.authenticate("local", { session: false }, (err, user, info) => {
			if (err || !user) {
				return res.status(400).json({
					message: "Something is not right",
					user: user,
				})
			}

			req.login(user, { session: false }, (err) => {
				if (err) {
					res.send(err);
				}

				const token = jwt.sign({ email: user.email }, jwtConfig.key, { algorithm: "HS256" });
				return res.json({ token });
			})
		})(req, res, next);
	}
}