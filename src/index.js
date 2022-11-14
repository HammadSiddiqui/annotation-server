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

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})