var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
    var extension  = process.argv[3],
        isExtension = function(val){
            val = val.split('.');
            return val.length === 2 && val[1] === extension;
        };

    list.filter(isExtension).forEach(function(val){
        console.log(val);
    });
});
