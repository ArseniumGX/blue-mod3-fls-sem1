const route = require('express').Router()

route.get('/', (req, res) => {
    res.statusCode = 200
    return res.send('<h1> Olá </h1')
})

module.exports = route