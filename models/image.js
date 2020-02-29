'use strict';

const mongoose = require("mongoose");
const { Readable } = require("stream");
const { createModel } = require("mongoose-gridfs");
let Image;
mongoose.connection.once("open", function () {
    Image = createModel({
        modelName: "images",
        bucketName: "images",
    });
});

module.exports = {
    saveImage(fileBuffer, filename) {
        const fileStream = new Readable();
        fileStream._read = () => { };
        fileStream.push(fileBuffer);
        fileStream.push(null);
        Image.write({ filename: filename }, fileStream);
    },

    async loadImage(id) {
        return Image.findById(id);
    },
}