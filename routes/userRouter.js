'use strict'

const express = require("express")
const router = express.Router()
const UserController = require("../controllers/userController")

// router
//     .route("/register")

router
    .post("/login", UserController.authenticateUser)

module.exports = router