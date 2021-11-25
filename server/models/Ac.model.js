const mongoose = require('mongoose')

const AcShema = new mongoose.Schema({
    receipt :{type:String,required: false},
    user :{type:mongoose.SchemaTypes.ObjectId,ref : "user" , required:true}
})
