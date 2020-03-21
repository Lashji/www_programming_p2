'use strict'
const mongoose = require("mongoose")
const path = require("path")
const crypto = require("crypto")
const multer = require("multer")
const GridFsStorage = require("multer-gridfs-storage")
const Grid = require("gridfs-stream")
const config = require("config")
const dbConfig = config.get("mongo")
let gfs

mongoose.connection.once("open", function () {
    gfs = Grid(mongoose.connection.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridFsStorage({
    url: `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'images'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({
    storage
});

module.exports = upload