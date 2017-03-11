var mongoose = require('mongoose');
//require so da require uma vez

var api = {};
api.lista = function(req,res){

    var model = mongoose.model('Foto');

    model.find({})
        .then(function(fotos){
            res.json(fotos);
        }, function(error){
            console.log('erro');
            res.status(500).json(error);
        });

};

api.buscaPorId = function(req,res){

    //para de varrer quando acha
    /*var foto = fotos.find(function(foto){
        return foto._id == req.params.id;
    });*/


};

api.removePorId = function(req,res){


    //remove da lista o que tem o id
    /*fotos = fotos.filter(function(foto){
          return foto._id != req.params.id;
    });*/

    //res.sendStatus(204);
    //res.status(204).end(); é igual

};


api.adiciona = function(req,res){

    /*var foto = req.body;
    foto._id = ++CONTADOR;
    fotos.push(foto);
    */

};


api.atualiza = function(req,res){

    var foto = req.body;
    var fotoId = req.params.id;

    //pega a posicao da foto no array
    /*var indice = fotos.findIndex(function(foto){
        return foto._id == fotoId;
    });*/

};

module.exports = api;
