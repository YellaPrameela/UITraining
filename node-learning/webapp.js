var http = require('http');

var requestListner = function(req,res){
    if(req.url=='/register'){
        res.writeHead(200);
        res.end("<h1>I am a Registration Page.</h1>");
    }
    else{
        res.end("<h1>I am a dummy Page.</h1>");
    }
};

var server=http.createServer(requestListner);

server.listen("4000");

