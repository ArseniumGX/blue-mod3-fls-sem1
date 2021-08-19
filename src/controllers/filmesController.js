const { filmes } = require('../database/database.json')

class FilmeController{
    read = (req, res) => {
        return res.json(filmes)
    }

    readOne = (req, res) => {
        const { id } = req.params

        if(filmes[id] === undefined)
            return res.json({'Message': "Filme não encontrado!"})

        return res.json(filmes[id])
    }

    create = (req, res) => {
        const { filme } = req.body
        
        filmes.push(filme)
        
        return res.json(filmes)
    }

    update = (req, res) => {
        const { id } = req.params

        if(filmes[id] === undefined)
            return res.json({'Message': "Filme não encontrado!"})

        const { filme } = req.body
        filmes[id] = filme
        res.json({"message": "Filme alterado com sucesso",  ...filmes })
    }

    delete = (req, res) => {
        const { id } = req.params

        if(filmes[id] === undefined)
            return res.json({'Message': "Filme não encontrado!"})

        delete filmes[id]   
        
        return res.json("Filme deletado")
    }
}

module.exports = new FilmeController()