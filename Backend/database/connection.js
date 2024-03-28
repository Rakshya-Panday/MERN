// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URL)
// .then(()=>{
//     console.log("Database connected successfully")
// })
// .catch((error)=>{
//     console.log(error)
// })



import mongoose from "mongoose";
import { DB_NAME } from "../Utils/constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb connected!! DB host: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB connection error",error)
        process.exit(1)
        
    }
}

export default connectDB