const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username : {
                type:String,
                required:true},
    email : {
             type:String,
             required:true},
    password : {
                type:String,
                required:true
    } ,
    phone : {
        type:Number,
        required:true
    },
    tokens : [{
        token:{
            type:String,
            required:true
        }
    }]        
},{
timestamps:true
})





// hashing passwords

userSchema.pre('save',async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);

    }
    next();
})


userSchema.methods.generateToken = async function () {
    try{
        let token = jwt.sign({_id:this._id},'secret123');
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;

    } catch(err){
        console.log("error")
    }
}


const User = mongoose.model('user',userSchema);

module.exports = User;