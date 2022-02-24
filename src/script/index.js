var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
    if(req.url === '/') {
    fs.readFile('src/index.html',function(err,data){
      res.writeHead(200,{'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  });
    }
    else if(req.url === '/styles.css') {
    fs.readFile('src/styles.css',function(err,data){
      res.writeHead(200,{"Content-Type": "text/css"});
      res.write(data);
      res.end();
    });
    }
    else if(req.url === '/script/Card.js') {
       fs.readFile('src/script/Card.js',function(err,data) {
          res.writeHead(200,{"Content-Type": "text/javascript"});
          res.write(data);
          res.end();
       });
    }

}).listen(3000);