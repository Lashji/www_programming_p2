'use strict'

const TestRouter = require("./routes/testRouter")
const ClientRouter = require("./routes/clientRouter")
const ProductRouter = require("./routes/productRouter")

module.exports = function (app) {
    app.use("/", ClientRouter)
    app.use("/api/items/", ProductRouter)
}