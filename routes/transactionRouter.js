'use strict'

const express = require("express")
const router = express.Router()
const TransactionController = require("../controllers/transactionController")

router
    .put("/:id", TransactionController.buyProduct)

module.exports = router