var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res){
   // Main index
   if (req.url == '/') {
      fs.readFile('src/index.html', function(err, data){
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   // Any other index, called as /
   else if(/(\/)$/.test(req.url)) {
      fs.readFile('src' + req.url + 'index.html', function(err, data){
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   // Any html file
   else if (/(\.html)$/.test(req.url)) {
      fs.readFile('src' + req.url, function(err, data) {
         res.writeHead(200, {"Content-Type": "text/html"});
         res.write(data);
         res.end();
      });
   }
   // Any css file
   else if(/(\.css)$/.test(req.url)) {
      fs.readFile('src' + req.url, function(err, data){
         res.writeHead(200, {"Content-Type": "text/css"});
         res.write(data);
         res.end();
      });
   }
   // Any js file
   else if(/(\.js)$/.test(req.url)) {
      fs.readFile('src' + req.url, function(err, data) {
          res.writeHead(200, {"Content-Type": "text/javascript"});
          res.write(data);
          res.end();
      });
   }
   // Any url not ending in a file extension => parse as html
   else if (!(/(\.\w+)/.test(req.url))) {
      fs.readFile('src' + req.url + '/index.html', function(err, data){
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }

}).listen(3000);