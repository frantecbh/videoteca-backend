require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')



const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


const routes = require('./routes')
const connectToDatabase = require('./database')
connectToDatabase()
app.use('/api', routes)


app.listen(3333, () => {
    console.log("Server run on port  3333")
})