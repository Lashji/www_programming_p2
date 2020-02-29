'use strict';

const express = require("express");
const router = express.Router();
const multer = require("multer");
const ImageController = require("../controllers/imageController");
const auth = require("../middleware/auth");
const upload = multer();

router.use(upload.single("image"));

router.use("/", auth.ensureAuthenticated);

router.get("/:id", ImageController.loadImage);
router.post("/", ImageController.saveImage);

module.exports = router;