const { games } = require('../database/database.json')
const { save, load } = require('../database/methods')

class GameController{
    read = (req, res) => {
        const { games } = load()
        return res.status(200).json({games})
    }

    readOne = (req, res) => {
        const { id } = req.params
        const { games } = load()

        if(games[id] === undefined)
            return res.status(404).json({'Message': "Game não encontrado!"})

        return res.status(200).json({id:id, games: games[id]})
    }

    create = (req, res) => {
        const { game } = req.body
        const buffer = load()
        
        buffer.games.push(game)
        
        save(buffer)
        return res.status(201).json({games: buffer.games})
    }

    update = (req, res) => {
        const { id } = req.params
        const buffer = load()

        if(buffer.games[id] === undefined)
            return res.status(404).json({'Message': "Game não encontrado!"})

        const { game } = req.body
        buffer.games[id] = game

        save(buffer)

        return res.status(202).json({"message": "Game alterado!",  games: buffer.games })
    }

    delete = (req, res) => {
        const { id } = req.params
        const buffer = load()

        if(buffer.games[id] === undefined)
            return res.json({'Message': "Game não encontrado!"})

        buffer.games.splice(id, 1)

        save(buffer)
        
        return res.status(202).json({message: "Game deletado!", games: buffer.games})
    }
}

module.exports = new GameController