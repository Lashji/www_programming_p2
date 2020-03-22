'use strict'

const ClientRouter = require("./routes/clientRouter")
const ProductRouter = require("./routes/productRouter")
const UserRouter = require("./routes/userRouter")
const ImageRouter = require("./routes/imageRouter")
const TransactionRouter = require("./routes/transactionRouter")

module.exports = function (app) {
    app.use("/api/products/", ProductRouter)
    app.use("/api/users/", UserRouter)
    app.use("/api/images/", ImageRouter)
    app.use("/api/buy/", TransactionRouter)
    app.use("/", ClientRouter)
}