'use strict'

const TestRouter = require("./routes/testRouter")
const ClientRouter = require("./routes/clientRouter")
const ItemRouter = require("./routes/itemRouter")

module.exports = function (app) {
    app.use("/", ClientRouter)
    app.use("/api/items/", ItemRouter)
}