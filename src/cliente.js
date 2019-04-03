var apps = angular.module("servico",[])
apps.factory("api_contador",function($http){
    function adicionar(){
        $http.get("https://api.countapi.xyz/update/c5068a21-202b-4def-9261-872ebdea964a?amount=1")
        .then(function(resp){
          document.getElementById("values").innerText = resp.data.value;
        },function(error){
            console.log(error);
        });
    }
 async  function get_valor(){
           
         return  await  $http.get("https://api.countapi.xyz/get/c5068a21-202b-4def-9261-872ebdea964a")
            .then(function(resp){
             return resp.data.value;
            },function(error){
                console.log(error);
            });
       
    }
    function zerar(){
        return  get_valor().then(function(numero){
            if(numero != undefined)
            {
                 diminuir(numero).then(function(v){
                    if(v ==0){
                        document.getElementById("values").innerText = v;
                      }
                     });
            }
        });
       
    }
  async function diminuir(x){
      while(x>0){
        x =  await $http.get("https://api.countapi.xyz/update/c5068a21-202b-4def-9261-872ebdea964a?amount=-1")
        .then(function(resp){
          return resp.data.value;
        },function(error){
            console.log(error);
        })
      }
      if(x== 0)
      {
          return x;
      }
      
    }
    return{
        aumentar:function(){
           adicionar();
        },
        zerando:function(){
            zerar();
        }
    }
})