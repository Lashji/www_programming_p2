"use strict";

const Image = require("../models/image");

module.exports = {
    async loadImage(req, res) {
        let imageObject = await Image.loadImage(req.params.id);
        let imageStream = imageObject.read();
        if (imageStream) {
            res.setHeader("Content-Type", "image/jpeg");
            imageStream.pipe(res);
        }
        else {
            res.sendStatus(404);
        }
    },

    async saveImage(req, res) {
        if (req.file) {
            Image.saveImage(req.file.buffer, req.file.originalname);
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
    },
}