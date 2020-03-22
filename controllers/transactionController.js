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

        await Product.findByIdAndUpdate({
            _id: req.params.id
        }, {
            state: 3
        })

        if (req.body.userID) {

            let user = await User.findOneAndUpdate(req.body.userID, {
                "$push": {
                    "bought_products": req.body.productID
                }
            }).exec()
        }

        const items = await allItems(req.user)

        res.json(items)

    }
}