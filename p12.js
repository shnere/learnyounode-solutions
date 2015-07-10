var http = require('http');

var server = http.createServer(function(req, res){
    var chunk = '', isPost = false;
    if(req.method === 'POST'){
        isPost = true;
    }
    req.on('data', function(data){
        chunk += data;
    });
    req.on('end', function(){
        if(isPost){
            res.end(chunk.toString().toUpperCase());
        }
    });
});

server.listen(process.argv[2]);
