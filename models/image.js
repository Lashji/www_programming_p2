'use strict';

const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
let GridFS;
mongoose.connection.once("open", function () {
    GridFS = Grid(mongoose.connection.db, mongoose.mongo);
});
const collection = "images";

module.exports = {
    saveImage(fileStream, filename) {
        let writeStream = GridFS.createWriteStream({
            filename: filename,
            root: collection,
        });
        fileStream.pipe(writeStream);
    },

    loadImage(id) {
        let readStream = GridFS.createReadStream({
            _id: id,
            root: collection,
        });
        return readStream;
    },
}