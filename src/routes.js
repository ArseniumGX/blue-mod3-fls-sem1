const filmeController = require('./controllers/filmesController')
const gameController = require('./controllers/gamesController')

const route = require('express').Router()

route.get('/', (req, res) => {
    res.statusCode = 200
    return res.send(`
    </>
        <h1>Bem vindo</h1>
        <div>
            <a href="/filmes"><button>Filmes</button></a>
            <a href="/games"><button>Games</button></a>
        </div>
    </>`)
})

route.get('/filmes', filmeController.read)
route.get('/filmes/dodia', filmeController.doDia)
route.get('/filmes/:id', filmeController.readOne)
route.post('/filmes', filmeController.create)
route.put('/filmes/:id', filmeController.update)
route.delete('/filmes/:id', filmeController.delete)

route.get('/games', gameController.read)
route.get('/games/:id', gameController.readOne)
route.post('/games', gameController.create)
route.put('/games/:id', gameController.update)
route.delete('/games/:id', gameController.delete)

route.get('/:slug', (req, res) => {
    return res.send(`<p>Página /${req.params.slug} não encontrada`)
})

module.exports = route