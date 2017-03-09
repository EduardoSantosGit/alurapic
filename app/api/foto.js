var api = {};

var CONTADOR = 2;

var fotos = [
    {_id: 1, titulo: 'leao', url: 'http://i62.tinypic.com/2mw9kr9.jpg'},
    {_id: 2, titulo: 'leao 2', url: 'http://i62.tinypic.com/2mw9kr9.jpg'}
];


api.lista = function(req,res){
    res.json(fotos);
};

api.buscaPorId = function(req,res){

    //para de varrer quando acha
    var foto = fotos.find(function(foto){
        return foto._id == req.params.id;
    });

    res.json(foto);

};

api.removePorId = function(req,res){


    //remove da lista o que tem o id
    fotos = fotos.filter(function(foto){
          return foto._id != req.params.id;
    });

    res.sendStatus(204);
    //res.status(204).end(); é igual

};


api.adiciona = function(req,res){

    var foto = req.body;
    foto._id = ++CONTADOR;
    fotos.push(foto);

    res.json(foto);

};


api.atualiza = function(req,res){

    var foto = req.body;
    var fotoId = req.params.id;

    //pega a posicao da foto no array
    var indice = fotos.findIndex(function(foto){
        return foto._id == fotoId;
    });

    fotos[indice] = foto;

    res.sendStatus(200);

};

module.exports = api;
