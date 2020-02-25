'use strict'

const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/productController")



router.get("/", ProductController.listItems)
router.get("/:id", ProductController.showItem) //TODO: Add Regex for id 
router.post("/", ProductController.saveItem)
router.put("/:id", ProductController.updateItem)
router.delete("/:id", ProductController.deleteItem)
module.exports = router