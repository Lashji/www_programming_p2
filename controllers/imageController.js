"use strict";

const mongoose = require("mongoose");
const { Readable } = require("stream");
let Image;
// We need to have an active mongoose connection before we can initialize the Image model.
mongoose.connection.once("open", function () {
    Image = require("../models/image");
})

module.exports = {
    async loadImage(req, res) {
        let imageObject = await Image.findById(req.params.id);
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
            const fileStream = new Readable();
            fileStream._read = () => { };
            fileStream.push(req.file.buffer);
            fileStream.push(null);
            const image = new Image({ filename: req.file.originalname });
            image.write(fileStream, (error, file) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(file);
                }
            });
        }
        else {
            res.sendStatus(404);
        }
    },
}