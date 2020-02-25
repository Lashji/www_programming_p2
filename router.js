'use strict'

const ClientRouter = require("./routes/clientRouter")
const ProductRouter = require("./routes/productRouter")
const UserRouter = require("./routes/userRouter")

module.exports = function (app) {
    app.use("/", ClientRouter)
    app.use("/api/items/", ProductRouter)
    app.use("/api/users/", UserRouter)
}