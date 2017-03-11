angular.module('alurapic')
       .controller('LoginController', function($scope,$http,$location){

       $scope.usuario = {};
       $scope.mensagem = {};

       $scope.autenticar = function(){

          var usuario = $scope.usuario;
          $http.post('/autenticar', {login: usuario.login, senha: usuario.senha})
               .then(function(){
                  $location.path('/');
               }, function(error){
                 $scope.usuario = {};
                  $scope.mensagem = 'login ou senha invalido';
                  console.log(error);
               });
       };


});
