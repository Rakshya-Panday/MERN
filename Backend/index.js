const express = require('express')
require('dotenv').config()
const { default: connectDB } = require('./database/connection')
// import connectDB from './database/connection.js'

// connectDB()

//middleware imports
const morgan = require('morgan')
const cors = require('cors')



//import routes

const testRoute = require('./Routes/testRoute')
const categoryRoutes = require('./Routes/categoryRoutes')
const productRoutes = require('./Routes/productRoutes')
const userRoutes = require('./Routes/userRoutes')
const orderRoutes = require('./Routes/orderRoutes')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(morgan('dev'))
app.use(cors()) // this is used to convert the data in the form of json format

// app.get('/hello',()=>{
//     response.send("HELLO WORLD!")
// })

//using Routes

app.use('/api',categoryRoutes)
app.use('/api',productRoutes)
app.use('/api',userRoutes)
app.use('/api',orderRoutes)
app.use('/api/public/uploads',express.static('public/uploads'))



app.use(testRoute)
app.listen(port,()=>{
    console.log(`App started successfully at port ${port}`)
})