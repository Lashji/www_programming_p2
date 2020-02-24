'use strict'

const express = require("express")
const router = express.Router()
const ClientController = require("../controllers/clientController")

router.get("/", ClientController.index)


module.exports = router