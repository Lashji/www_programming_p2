const express = require("express")
const app = express()
const helmet = require("helmet")
const config = require("config")
require("dotenv").config()
const path = require("path")
const dbConfig = config.get("mongo")
const PORT = process.env.PORT

const db = require("./models/db")
db.connectDB(dbConfig)

app.use(express.json())
app.use(helmet())
app.use(express.static(path.join(__dirname, 'client/build')));

require("./router")(app)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})