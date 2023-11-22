const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req, res) =>{
    res.json({
        nome: "Diego",
        sobrenome: "Teixeira",
        idade: 36
    })
})

app.get('/ws/69020060/json',(req, res) =>{
    res.json({
        "cep": "69020-060",
        "logradouro": "Rua Major Gabriel",
        "complemento": "",
        "bairro": "Centro",
        "localidade": "Manaus",
        "uf": "AM",
        "ibge": "1302603",
        "gia": "",
        "ddd": "92",
        "siafi": "0255"
    })
})



app.get('/imagens',(req, res) =>{
    res.send("Olá Imagens")
})

app.get('/sobre',(req, res) =>{
    res.sendFile(path.resolve('sobre.html'))
})

app.get('/perguntas',(req, res) =>{
    res.sendFile(path.resolve('perguntas.html'))
})

app.listen(3000, () => {
    console.log('Servidor iniciado com sucesso')
})
