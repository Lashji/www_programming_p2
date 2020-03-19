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
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", '*')
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//     // res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.setHeader("Access-Control-Allow-Headers", " Authorization,X-HTTP-Method-Override, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     next()
// })

require("./middleware/passport")(passport)

app.use(express.json())
app.use(helmet())
app.use(express.static(path.join(__dirname, 'client/build')));


setup(config.get('admin'))
require("./router")(app)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})