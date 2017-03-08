var api = {};

api.lista = function(req,res){

    var fotos = [
        {_id: 1, titulo: 'leao', url: 'http://i62.tinypic.com/2mw9kr9.jpg'},
        {_id: 2, titulo: 'leao 2', url: 'http://i62.tinypic.com/2mw9kr9.jpg'}
    ];

    res.json(fotos);
};


module.exports = api;
