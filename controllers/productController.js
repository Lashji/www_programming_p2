'use strict'
const Product = require("../models/product")
const passport = require("passport")

module.exports = {
	async listItems(req, res) {
		let items = await Product.find({
				state: 1
			})
			.exec()

		if (req.user) {

			console.log("req.user found", req.user)
			if (req.user.role === 'admin') {
				let pendingItems = await Product.find({
					state: 0
				}).exec()
				items = items.concat(pendingItems)
			}
		}

		res.json(items)
	},
	showItem(req, res) {
		let id = req.params.id
		res.json({
			id: id
		})
	},
	saveItem(req, res) {
		console.log("saving item")
		const data = req.fields
		const image = req.files
		console.log("saving item, body=", data)
		data.offer_price = data.sale_price*1.24
		let product = new Product(data)
		product.save()
	},
	updateItem(req, res) {
		console.log("updating id", req.params.id)
		console.log("updating item, body=", req.body)
	},
	deleteItem(req, res) {
		console.log("deleting id", req.params.id)
	}
}