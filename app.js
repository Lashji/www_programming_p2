require("dotenv").config()
const express = require("express")
const app = express()
const helmet = require("helmet")
const config = require("config")
const path = require("path")
const passport = require("passport")
const dbConfig = config.get("mongo")
const PORT = process.env.PORT
const setup = require("./setup/setup")
const db = require("./models/db")
db.connectDB(dbConfig)
require("./middleware/passport")(passport)

app.use(express.json())
app.use(helmet())
app.use(express.static(path.join(__dirname, 'client/build')));
setup(config.get('admin'))



require("./router")(app)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})