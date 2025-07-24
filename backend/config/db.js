const mongoose=require('mongoose')
require('dotenv').config()


console.log("mongo url-",process.env.MONGO_URL)
const connection = mongoose.connect(process.env.MONGO_URL)

module.exports={connection}