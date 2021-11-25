const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
 image_urls:[{type:String,required:true}]
})

module.exports = mongoose.model('product',productSchema)