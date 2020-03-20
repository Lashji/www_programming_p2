require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const config = require("config")
const path = require("path")
const passport = require("passport")
const dbConfig = config.get("mongo")
const PORT = process.env.PORT
const setup = require("./setup/setup")
const db = require("./models/db")
db.connectDB(dbConfig)
// const formidable = require("express-formidable")

const whitelist = ["http://localhost:3001"]
app.use(cors({
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('not allowed by CORS'))
        }
    }
}))

require("./middleware/passport")(passport)
// router.use(formidable())

app.use(express.json())

app.use(helmet())
app.use(express.static(path.join(__dirname, 'client/build')));


setup(config.get('admin'))
require("./router")(app)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})