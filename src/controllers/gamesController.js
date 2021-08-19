const { games } = require('../database/database.json')

class GameController{

    read = (req, res) => {
        return res.json(games)
    }
    
    readOne = (req, res) => {
        const { id } = req.params

        if(games[id] === undefined)
            return res.json({'Message': "Game não encontrado!"})

        return res.json(games[id])
    }
    
    create = (req, res) => {
        const { game } = req.body
        
        games.push(game)
        
        return res.json(games)
    }
    
    update = (req, res) => {
        const { id } = req.params

        if(games[id] === undefined)
            return res.json({'Message': "Game não encontrado!"})

        const { game } = req.body
        games[id] = game
        
        return res.json({"message": "Game alterado com sucesso",  ...games })
    }
    
    delete = (req, res) => {
        const { id } = req.params

        if(games[id] === undefined)
            return res.json({'Message': "Game não encontrado!"})

        delete games[id]   
        
        return res.json("Game deletado!")
    }
}
    
module.exports = new GameController