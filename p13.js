var http = require('http'),
    url  = require('url');

var server = http.createServer(function(req, res){
    var parsedUrl       = {},
        result          = {},
        parseTime       = function(time){
            var d   = new Date(time);
            result.hour     = d.getHours();
            result.minute   = d.getMinutes();
            result.second   = d.getSeconds();
            return JSON.stringify(result);
        },
        parseUnixTime   = function(time){
            var d = new Date(time);
            result.unixtime = d.getTime();
            return JSON.stringify(result);
        };

    parsedUrl = url.parse(req.url, true);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(parsedUrl.pathname === '/api/parsetime'){
        return res.end(parseTime(parsedUrl.query.iso));
    }else if (parsedUrl.pathname === '/api/unixtime') {
        return res.end(parseUnixTime(parsedUrl.query.iso));
    }else{
        res.writeHead(404);
        return res.end();
    }
});

server.listen(process.argv[2]);
