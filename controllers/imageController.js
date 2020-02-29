"use strict";

const Image = require("../models/image");

module.exports = {
    async loadImage(req, res) {
        let imageStream = await Image.loadImage(req.params.id);
        if (imageStream) {
            res.setHeader("Content-Type", "image/jpeg");
            imageStream.pipe(res);
        }
        else {
            res.sendStatus(404);
        }
    },

    async saveImage(req, res) {
        if (req.body) {
            Image.saveImage(req);
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
    },
}