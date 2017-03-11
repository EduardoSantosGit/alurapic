module.exports = function(app){

    var api = app.api.auth;

    app.post('/autenticar',api.autentica);
    app.use('/*', api.verificaToken); //nao vai fazer distincao de http

};
