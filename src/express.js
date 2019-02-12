try{
    var app = require( "express");
    var borde_par =require( "body-parser");
    var apps = app();
    apps.use(borde_par.json());
    
        var dados = [
            {
              lat: -25.470991, 
              lon: -49.271036
            },
            {
              lat: -0.935586,
              lon: -49.635540
            },
            {
              lat: -2.485874, 
              lon: -43.128493
            }
        ]
    apps.set("for",dados);
    apps.listen(8000, function(){
        console.log("servido rondado na porta 8000");
    })
}catch{
console.log("erro");
}
