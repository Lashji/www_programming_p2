const express = require("express")
const app = express()
const helmet = require("helmet")
const config = require("config")
const path = require("path")

const dbConfig = config.get("mongo")

const db = require("./models/db")
db.connectDB(dbConfig)

app.use(helmet())
app.use(express.static(path.join(__dirname, 'client/build')));

require("./router")(app)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})