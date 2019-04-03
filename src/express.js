var app  = angular.module('app',['servico'])
app.controller("api",["$scope","api_contador",function($scope,api_contador){
  $scope.numero = null;
$scope.contar = function()
{
  api_contador.aumentar();
}
$scope.zerar = function(){
api_contador.zerando();
}
}]);
    