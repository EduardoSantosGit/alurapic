module.exports = function(app){

  var mongoose = require('mongoose');
  var jwt = require('jsonwebtoken');

  var api = {};
  var model = mongoose.model('Usuario');

  api.autentica = function(req,res){
      model.findOne({login: req.body.login, senha: req.body.senha})
           .then(function(usuario){
              if(!usuario){
                console.log('login e senha invalido');
                res.sendStatus(401);
              } else {
                 //criar um token
                 var token = jwt.sign(usuario.login,app.get('secret'), {expiresIn: 84600});
                 console.log('token criado e sendo enviado no header de resposta');
                 //mandando no header
                 res.set('x-access-token',token);
                 res.end();
              }

           }, function(error){
                console.log('login e senha invalido');
                res.sendStatus(401);
           });
  };

  api.verificaToken = function(req,res, next){

      var token = req.headers['x-access-token'];

      if(token){
        console.log('verificando token');
        jwt.verify(token,app.get('secret'), function(err,decoded){
              if(err){
                console.log('token rejeitado');
                res.sendStatus(401);
              }
              req.usuario = decoded;
              next();
        });
      } else {
        console.log('token nao enviado');
        res.sendStatus(401);
      }
  };
  return api;

};
