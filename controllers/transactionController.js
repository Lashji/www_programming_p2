'use strict'
const Product = require("../models/product")
const User = require("../models/user")
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
        console.log("user id", user._id)
        let foundUser = await User.findOne({
                _id: user._id
            }).populate('bought_products')
            .exec()

        console.log("foundUser", foundUser)

        let userItems = foundUser.bought_products
        console.log("user items", userItems)
        items = items.concat(userItems)
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
    async buyProduct(req, res) {
        console.log("Transaction controller:")
        console.log("product id:", req.params.id)
        console.log("req body:", req.body)

        let product = await Product.findByIdAndUpdate({
            _id: req.params.id
        }, {
            state: 3
        }, {
            new: true
        })

        if (req.body.userID) {
            let user = await User.findOneAndUpdate({
                _id: req.body.userID
            }, {
                "$push": {
                    "bought_products": product
                }
            }, {
                new: true
            }).exec()

            console.log("user that bout the item", user)
        }

        const items = await allItems(req.user)

        res.json(items)

    }
}