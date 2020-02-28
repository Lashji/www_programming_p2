
const fs = require("fs")
const path= require("path")
const Product = require("../models/product")
const User = require("../models/user")

const startSetup =  (config) => {

    console.log("starting setup with config: ", config)
    createData()
    createUsers(config)
}

const createData = async () => {
    const rawData = fs.readFileSync(
        path.resolve(__dirname, './mockupData.json')
    )
    const data = JSON.parse(rawData)
    try {
        await Product.deleteMany({})
        await Product.create(data)

        console.log("created data: ", data)
    } catch (error) {
        console.error("Error when creating dummy data: ", error)        
    }
}


const createUsers = async (config) => {
    const admin = await User.findOne({role: 'admin'}).exec()
    console.log("admin user exists in db:",admin)
    if (admin)
        return

    
    const user = new User(config)
    try {
        await user.save()
    } catch (error) {
        console.error("error when trying to add admin: ", error)
        return
    }
    console.log("admin user created")
}


module.exports = startSetup