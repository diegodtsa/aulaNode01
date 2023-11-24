const path = require('path');

class PerguntasController{
    static index(req, res){
        res.sendFile(path.resolve('perguntas.html'))
    }
}

module.exports = PerguntasController;