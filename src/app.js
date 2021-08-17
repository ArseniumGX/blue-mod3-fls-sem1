const app = require('express')()
const route = require('./routes')

app.use(route)

module.exports = app