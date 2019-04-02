
    var resquest = require("request");
    var http = require('http');
    const port = 8000
const ip = 'localhost'
    var visitantes = null;
    
  const server =  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h3> numero de  visitantes:"+adiconar_visitantes()+"</h3>");
    res.end();
  });
  server.listen(port,ip,()=>{
    console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
  })
   function adiconar_visitantes(){
     resquest("https://api.countapi.xyz/update/c5068a21-202b-4def-9261-872ebdea964a?amount=1",function(erro,respost,body){
      visitantes = JSON.parse( body);
      
      });
      if(visitantes == undefined)return 0;
      return visitantes["value"];
     
   }
   
   function zerar()
   {
    if(visitantes == undefined)return 0;
    while(visitantes["value"]!=0){
     resquest("https://api.countapi.xyz/update/c5068a21-202b-4def-9261-872ebdea964a?amount=-1"+visitantes,function(erro,respost,body){
       visitantes = JSON.parse( body);
       
       });
    }
   
    return visitantes["value"];

  }
  module.exports = zerar;
   

