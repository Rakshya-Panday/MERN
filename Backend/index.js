const express = require('express')
require('dotenv').config()
const { default: connectDB } = require('./database/connection')
// import connectDB from './database/connection.js'

// connectDB()

//middleware imports



//import routes

const testRoute = require('./Routes/testRoute')
const categoryRoutes = require('./Routes/categoryRoutes')
const productRoutes = require('./Routes/productRoutes')
const userRoutes = require('./Routes/userRoutes')

const app = express()
const port = process.env.PORT

app.use(express.json()) // this is used to convert the data in the form of json format

// app.get('/hello',()=>{
//     response.send("HELLO WORLD!")
// })

//using Routes

app.use('/api',categoryRoutes)
app.use('/api',productRoutes)
app.use('/api',userRoutes)


app.use(testRoute)
app.listen(port,()=>{
    console.log(`App started successfully at port ${port}`)
})