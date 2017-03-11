module.exports = function(uri){

  var mongoose = require('mongoose');

  mongoose.connect('mongodb://' + uri);

  mongoose.connection.on('connected', function(){
        console.log('conectado ao mongo');
  });

  mongoose.connection.on('error', function(error){
      console.log('erro na conexao' + error);
  });

  mongoose.connection.on('disconnected', function(){
      console.log('conexao mongo fechada');
  });

  //quando finaliza a aplicacao
  process.on('SIGINT', function(){
      mongoose.connection.close(function(){
          console.log('conexao fechada pelo termino da aplicacao');
          process.exit(0);
      });
  });


};
