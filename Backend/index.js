const express = require('express')
require('dotenv').config()

//middleware imports



//import routes

const testRoute = require('./Routes/testRoute')

const app = express()
const port = process.env.PORT

app.use(express.json()) // this is used to convert the data in the form of json format

// app.get('/hello',()=>{
//     response.send("HELLO WORLD!")
// })

//using Routes

app.use(testRoute)
app.listen(port,()=>{
    console.log(`App started successfully at port ${port}`)
})