const mongoose= require('mongoose')

/*
street
city
state
zipcode
country
country code

 */
const addressSchema = new mongoose.Schema({
      street:{
        type:String,
        // required:true
      },
      city:{
        type:String,
        // required:true
      },
      state:{
        type:String,
        // required:true
      },
      zipcode:{
        type:String,
        // required:true
      },
      country:{
        type:String,
        required:true
      },
},{timestamps:true})

module.exports = mongoose.model("Address",addressSchema)
