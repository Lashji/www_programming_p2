'use strict'
const Product = require("../models/product")
const Grid = require("gridfs-stream")
const mongoose = require("mongoose")
let gfs

mongoose.connection.once("open", function () {
	gfs = Grid(mongoose.connection.db, mongoose.mongo)
	gfs.collection('images')
})

const allItems = async (user) => {
	let items = await Product.find({
			state: 1
		})
		.exec()

	if (user) {
		console.log("req.user found", user)
		if (user.role === 'admin' || user.role === "shopkeeper") {
			let pendingItems = await Product.find({
				state: 0
			}).exec()
			items = items.concat(pendingItems)
		}
	}

	return items
}

module.exports = {
	async listItems(req, res) {
		console.log("requesting items")
		const items = await allItems(req.user)
		console.log("return items", items)
		res.json(items)
	},
	showItem(req, res) {
		let id = req.params.id
		res.json({
			id: id
		})
	},
	async saveItem(req, res) {
		console.log("saving item")
		const data = req.body
		const files = req.file

		console.log("files: ", files)

		console.log("saving item, body=", data)
		data.offer_price = data.sale_price * 1.24

		let product = new Product(data)
		product.images = [files.filename]

		await product.save()
	},
	async updateItem(req, res) {
		console.log("updating id", req.params.id)
		console.log("updating item, body=", req.body)
		const state = req.body.state
		let result = await Product.findByIdAndUpdate({
			_id: req.params.id
		}, {
			state: state
		})
		const items = await allItems(req.user)
		console.log("returning items: ", items)
		return res.json(items)
	},
	async deleteItem(req, res) {
		console.log("deleting id", req.params.id)

		const result = await Product.remove({
			_id: req.params.id
		})
		console.log("delete result", result)

		const items = await Product.find().exec()

		return res.json(items)
	}
}