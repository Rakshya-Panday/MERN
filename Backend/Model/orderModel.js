const mongoose = require('mongoose')
const {ObjectId} =  mongoose.Schema

const OrderModel = mongoose.Schema({
    orderItems :[{
        type:ObjectId,
        ref:"OrderItemSchema",
        required:true
    }],
    user:{
        type:ObjectId,
        ref:"UserModel",
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    address:{
        type:ObjectId,
        ref:"AddressModel"
    },
    orderStatus:{
        type:"String",
        default:"Pending"
    },
    payment_status:{
        type:"String",
        default: "Pending"
    }
    
},{timeStamps:true})
module.exports = mongoose.model("OrderModel",OrderModel)