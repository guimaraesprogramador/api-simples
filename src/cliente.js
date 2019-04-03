var apps = angular.module("servico",[]);
apps.factory("api_contador",function($scope,$http){
    function adicionar(){
        $http.get("https://api.countapi.xyz/update/c5068a21-202b-4def-9261-872ebdea964a?amount=1")
        .then(function(resp){
          return resp.value;
        },function(error){
            console.log(error);
        });
    }
    return{
        aumentar:function(){
           return adicionar();
        }
    }
})