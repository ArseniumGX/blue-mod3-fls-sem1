const express = require('express')
const route = require('./routes')
require('dotenv').config({'path': '.env.test'})

const app = express()

app.use(express.json())
app.use(route)
app.set('port', process.env.PORT)

module.exports = app