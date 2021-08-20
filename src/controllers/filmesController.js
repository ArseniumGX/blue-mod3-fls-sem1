const { save, load } = require('../database/methods')

class FilmeController{
    read = (req, res) => {
        const { filmes } = load()
        return res.status(200).json({filmes})
    }

    readOne = (req, res) => {
        const { id } = req.params
        const { filmes } = load()

        if(filmes[id] === undefined)
            return res.status(404).json({'Message': "Filme não encontrado!"})

        return res.status(200).json({id:id, filme: filmes[id]})
    }

    create = (req, res) => {
        const { filme } = req.body
        const buffer = load()
        
        buffer.filmes.push(filme)
        
        save(buffer)
        return res.status(201).json({filmes: buffer.filmes})
    }

    update = (req, res) => {
        const { id } = req.params
        const buffer = load()

        if(buffer.filmes[id] === undefined)
            return res.status(404).json({'Message': "Filme não encontrado!"})

        const { filme } = req.body
        buffer.filmes[id] = filme

        save(buffer)

        return res.status(202).json({"message": "Filme alterado com sucesso",  filmes: buffer.filmes })
    }

    delete = (req, res) => {
        const { id } = req.params
        const buffer = load()

        if(buffer.filmes[id] === undefined)
            return res.json({'Message': "Filme não encontrado!"})

        buffer.filmes.splice(id, 1)

        save(buffer)
        
        return res.status(202).json({message: "Filme deletado!", filmes: buffer.filmes})
    }

    doDia = (req, res) => {
        const buffer = load()
        return res.status(200).json({
            message: "Filme do dia", 
            filme: buffer.filmes[Math.floor(Math.random() * (buffer.filmes.length - 0)) + 0]})
    }

}


module.exports = new FilmeController()