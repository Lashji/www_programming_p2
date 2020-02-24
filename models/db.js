'use strict'


const mongoose = require("mongoose")

const connectDB = (dbConfig) => {
 
    mongoose
        .connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            mongoose.connection.on('error', (err) => {
                debug(err);
            });

            mongoose.connection.on('reconnectFailed', handleCriticalError);
        })
        .catch(handleCriticalError);   
}

const handleCriticalError = (err) => {
    console.err(err)
    throw err
}


const disconnectDB = () => {
    mongoose.disconnect();
}

module.exports = {connectDB, disconnectDB}