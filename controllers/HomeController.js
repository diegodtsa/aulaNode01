class HomeController {
    static index(req,res){
        res.json({
            nome: "Diego",
            sobrenome: "Teixeira",
            idade: 36
        })
    }
}

module.exports = HomeController;