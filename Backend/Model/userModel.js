const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    // address:{
    //     type:ObjectId,
    //    ref:"Address"
    // },
    // phoneNumber:{
    //     type:Number,

    // },
    // dateOfBirth:{
    //     type:Date,
    //     required:true
    // },
    // gender:{
    //     type:String,
    //     required:true
    // },
    isVerfied:{
        type:Boolean,
        default:false
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports = mongoose.model("UserModel",userSchema)