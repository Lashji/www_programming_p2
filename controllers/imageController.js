"use strict";

const Product = require("../models/product")
const Grid = require("gridfs-stream")
const mongoose = require("mongoose")
let gfs

mongoose.connection.once("open", function () {
    gfs = Grid(mongoose.connection.db, mongoose.mongo)
    gfs.collection('images')
})
module.exports = {
    async loadImages(req, res) {

        gfs.files.find().toArray((err, files) => {
            if (!files || files.length === 0)
                return res.status(404).json({
                    err: "No files exists"
                })

            return res.json(files)
        })

    },
    async loadImage(req, res) {
        let fname = req.params.filename
        gfs.files.findOne({
            filename: fname
        }, (err, file) => {
            if (!file || file.length === 0)
                return res.status(404).json({
                    err: "No file exists"
                })

            if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                res.set("Content-type", file.contentType)

                const readStream = gfs.createReadStream(file.filename)
                console.log("readstream", file.filename)
                readStream.pipe(res)
            } else {
                res.status(404).json({
                    err: "Not an image"
                })
            }


        })
    },

    async saveImage(req, res) {
        if (req.file) {
            const fileStream = new Readable();
            fileStream._read = () => {};
            fileStream.push(req.file.buffer);
            fileStream.push(null);
            const image = new Image({
                filename: req.file.originalname
            });
            image.write(fileStream, (error, file) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(file);
                }
            });
        } else {
            res.sendStatus(404);
        }
    },
}