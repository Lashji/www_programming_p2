'use strict'
const Product = require("../models/product")
const passport = require("passport")
module.exports = {
	async listItems(req, res) {
		const items = await Product.find()
			.exec()

		console.log("user", req.user)
		console.log("user role", req.user.role)
		res.json(items)
	},
	showItem(req, res) {
		let id = req.params.id
		res.json({
			id: id
		})
	},
	saveItem(req, res) {
		const data = req.body

		let product = new Product(data)
		product.save()
		console.log("saving item, body=", req.body)
	},
	updateItem(req, res) {
		console.log("updating id", req.params.id)
		console.log("updating item, body=", req.body)
	},
	deleteItem(req, res) {
		console.log("deleting id", req.params.id)
	}
}