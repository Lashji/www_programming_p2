'use strict'

const express = require("express")
const router = express.Router()
const TestController = require("../controllers/testController")

router.get("/", TestController.test)


module.exports = router