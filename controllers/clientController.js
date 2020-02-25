'use strict'
const path = require("path")

module.exports = {
    index (req, res) {
        res.sendFile(path.join(__dirname+'/../client/build/index.html'))
    }
}