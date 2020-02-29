'use strict';

const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/imageController");
const auth = require("../middleware/auth");

router.use("/", auth.ensureAuthenticated);

router.get("/:id", ImageController.loadImage);
router.post("/", ImageController.saveImage);

module.exports = router;