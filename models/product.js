'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
	category: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	offer_price: {
		type: Number,
		required: true
	},
	sale_price: {
		type: Number,
		required: true
	},
	keywords: {
		type: [String],
		required: false
	},
	description: {
		type: String,
		required: true
	},
	original_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	}, // use populate
	images: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Image'
	}
})


productSchema.virtual('link').get(function () {
	return `http://localhost:3000/api/products/${this._id}`
})


const Product = mongoose.model('Product', productSchema)

module.exports = Product