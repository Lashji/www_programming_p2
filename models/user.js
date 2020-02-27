'use strict'

const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schemaDefaults = {
    name: {
        minLength: 1,
        maxLength: 50
    },
    password: {
        minLength: 6,
        maxLength: 100
    },
    role: {
        values: ['admin', 'shopkeeper', 'user'],
        defaultValue: 'user'
    }
};

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minLength: schemaDefaults.name.minLength,
		maxLength: schemaDefaults.name.maxLength
	},
	email: {
		type:String,
		required: true,
		unique: true,
		trim: true,
        // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},
	password: {
		type: String,
		required: true,
		minLength: 1,
		set: (password) => {
			// returning empty or undefined password. because of min length
			// this should throw an error. TODO: TEST THAT THIS WORKS
			if (!password || password.length === 0) return password

			return bcrypt.hashSync(password, 10)
		}
	},
	 role: {
		 type: String,
		 trim: true,
		 lowercase: true,
		 enum: schemaDefaults.role.values,
		 defaul: schemaDefaults.role.defaultValue
	 }
})


userSchema.virtual('isAdmin').get(function() {
	return this.role ==='admin'
})
userSchema.virtual('isShopkeeper').get(function() {
	if (this.role === 'admin') return true
	return this.role ==='shopkeeper'
})
userSchema.virtual('isUser').get(function() {
	if (this.role === 'admin' || this.role === 'shopkeeper') return true

	return this.role ==='user'
})

userSchema.methods.checkPassword = async (password) => {
	return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports = User