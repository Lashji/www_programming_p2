'use strict'

const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/productController")
const auth = require("../middleware/auth")
const upload = require("../middleware/processImg")
// const formidable = require("express-formidable")
// 
// router.use(formidable())

router.use("/", auth.passUser)
router.get("/", ProductController.listItems)
router.get("/:id", ProductController.showItem) //TODO: Add Regex for id 
router.post("/", upload.array("image"), ProductController.saveItem)
router.put("/:id", ProductController.updateItem)
router.delete("/:id", ProductController.deleteItem)
module.exports = router