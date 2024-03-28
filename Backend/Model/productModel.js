const mongoose = require("mongoose")
const {objectId} =  mongoose.Schema
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
        trim : true,
    },
    price :{
        type:Number,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    product_image:{
        type:String,
    },
    reting:{
        type:Number,
        default:1
    },
    category:{
        type: objectId,
        ref:"CategoryModel"
    },
    counting_stock:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("ProductModel",productSchema)