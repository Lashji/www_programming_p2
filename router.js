'use strict'

const TestRouter = require("./routes/testRouter")
const ClientRouter = require("./routes/clientRouter")
module.exports = function (app){
    app.use("/test", ClientRouter)
}