'use strict'

const ClientRouter = require("./routes/clientRouter")
const ProductRouter = require("./routes/productRouter")
const UserRouter = require("./routes/userRouter")

module.exports = function (app) {
    app.use("/api/products/", ProductRouter)
    app.use("/api/users/", UserRouter)
    app.use("/", ClientRouter)
}