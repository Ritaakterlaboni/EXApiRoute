const mongoose = require ('mongoose')
const {Schema} = mongoose

const ExApi = new Schema({
    name : String,
    email : String,
    password : String,
})


module.exports = mongoose.model("ExApi", ExApi)