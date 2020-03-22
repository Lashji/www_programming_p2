'use strict'
const Product = require("../models/product")
const Grid = require("gridfs-stream")
const mongoose = require("mongoose")
let gfs

mongoose.connection.once("open", function () {
	gfs = Grid(mongoose.connection.db, mongoose.mongo)
	gfs.collection('images')
})
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

		let result = await Product.findByIdAndUpdate({
			_id: req.params.id
		}, {
			state: 1
		})
		console.log("result", result)
		const items = await Product.find().exec()
		console.log("returning updated items", items)
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