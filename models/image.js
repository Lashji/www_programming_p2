'use strict';

const { createModel } = require("mongoose-gridfs");
const Image = createModel({
    modelName: "images",
    bucketName: "images",
});

module.exports = Image;
