var http = require('http');

http.get(process.argv[2], function(res){
    var finalStream = '';
    res.on('data', function(data){
        finalStream += data;
    });
    res.on('end', function(){
        console.log(finalStream.length);
        console.log(finalStream);
    });
});
