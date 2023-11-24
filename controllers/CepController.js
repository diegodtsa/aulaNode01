class CepController{
    static index(req, res){
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
    }
}

module.exports = CepController;