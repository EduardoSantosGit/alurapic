var mongoose = require('mongoose');
//require so da require uma vez



var model = mongoose.model('Foto');

var api = {};
api.lista = function(req,res){

    model.find({})
        .then(function(fotos){
            res.json(fotos);
        }, function(error){
            console.log('erro');
            res.status(500).json(error);
        });

};

api.buscaPorId = function(req,res){

    model.findById(req.params.id)
          .then(function(foto){

            if(!foto) throw Error('Foto nao encontrada');
            res.json(foto);

          }, function(error){
              console.log(error);
              res.status(404).json(error);
          });

    //para de varrer quando acha
    /*var foto = fotos.find(function(foto){
        return foto._id == req.params.id;
    });*/


};

api.removePorId = function(req,res){

    model.remove({_id: req.params.id})
          .then(function(){
              res.sendStatus(204);
          }, function(error){
            console.log(error);
            res.status(500).json(error);
          });
    //remove da lista o que tem o id
    /*fotos = fotos.filter(function(foto){
          return foto._id != req.params.id;
    });*/

    //res.sendStatus(204);
    //res.status(204).end(); é igual

};


api.adiciona = function(req,res){

    model.create(req.body)
          .then(function(foto){
              res.json(foto);
          }, function(error){
            console.log(error);
            res.status(500).json(error);
          });
    /*var foto = req.body;
    foto._id = ++CONTADOR;
    fotos.push(foto);
    */

};


api.atualiza = function(req,res){

    model.findByIdAndUpdate(req.params.id, req.body)
          .then(function(foto){
             res.json(foto);
          }, function(error){
            console.log(error);
            res.status(500).json(error);
          });

    //pega a posicao da foto no array
    /*var indice = fotos.findIndex(function(foto){
        return foto._id == fotoId;
    });*/

};

module.exports = api;
