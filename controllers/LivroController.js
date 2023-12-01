const { index } = require("./SobreController");
const { livros } = require('../models')

class LivroController {
    /*static index(req, res){
        res.json([
        {    
        nome: "O Senhor dos Aneis",
        autor: "J R Tolkien",
        ano: 1999,
        id:1
        },
        {
        nome: "Harry Potter",
        autor: "J K Rowlng",
        ano: 2000,
        id:2
        }
        ])

    }
    */
   static async index(req,res){
        const meusLivros =  await livros.findAll()
        res.json(meusLivros)
   }

   static async show(req,res){
        const livro =  await livros.findByPk(req.params.id)
        res.json(livro)
    }

    static async update(req,res){
        const livro =  await livros.findByPk(req.params.id)
        await livro.update({
            nome: req.body.nome,
            autor: req.body.autor,
            ano: req.body.ano
        })

        res.json(livro)
    }

    static async delete(req,res){
        const livro =  await livros.findByPk(req.params.id)
        livro.destroy()

        res.json({
            sucess:true
        })
    }

   static async store(req,res){
        const livro = await livros.create({
            nome: req.body.nome,
            autor: req.body.autor,
            ano: req.body.ano,
    })
        res.json({livro})
    }



    static show(req,res){
        const id = req.params.id
        res.json({
        nome: "O Senhor dos Aneis",
        autor: "J R Tolkien",
        ano: 1999,
        idSolcitado:id
        })
    }


    /*static store(req, res){
        res.json({
            nome: req.body.nome,
            autor: req.body.autor,
            ano: req.body.ano,
            id: 3
        })
    }
    */

    /*
    static update(req,res){
        res.json({
            nome: req.body.nome,
            autor: req.body.autor,
            ano: req.body.ano,
            id: req.params.id
        })
    }
    */

    static delete(req, res){
        res.json({
            sucess:true
        })
    }
}

module.exports = LivroController;