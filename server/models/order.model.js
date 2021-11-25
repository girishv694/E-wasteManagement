const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    name : {type:String,required:true},
    

})


const order = mongoose.model("order",orderSchema)
module.exports = order;