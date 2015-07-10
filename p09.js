var http = require('http'),
    finished = [];

var processData = function(url, order){
    http.get(url, function(res){
        var finalOutput = '';
        res.on('error', console.error);
        res.on('data', function(data){
            finalOutput += data;
        });
        res.on('end', function(){
            finished[order] = finalOutput;
            if(finished[0] !== undefined && finished[1] !== undefined && finished[2] !== undefined){
                finished.forEach(function(val){
                    console.log(val);
                });
            }
        });
    });
};

for(var i = 2; i < process.argv.length; i++){
    processData(process.argv[i], i-2);
}
