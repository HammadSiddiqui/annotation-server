//Annotation Server
//CRUD
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
/**
 * load environment variables from .env
 */
require('dotenv').config()

/**
 * use json parser for express
 */
app.use(bodyParser.json({ limit: '50mb' }))

require('./database')()

// Calling Application Routes
let apiRoutes = require('./routes')
app.use('/', apiRoutes)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Displaying all annotations')
})


app.listen(process.env.PORT, () => {
    console.log(`Engine listening on port ${process.env.PORT}`)
})