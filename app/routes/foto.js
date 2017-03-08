module.exports = function(app){

  var api = app.api.foto;
  app.get('/v1/fotos', api.lista);

}
