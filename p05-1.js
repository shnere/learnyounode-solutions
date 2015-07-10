var fs = require('fs');
module.exports = function(dirname, extension, callback){
    fs.readdir(dirname, function(err, list){
        var isExtension = function(val){
                val = val.split('.');
                return val.length === 2 && val[1] === extension;
            };
        if(err){
            return callback(err, null);
        }

        return callback(null, list.filter(isExtension));
    });
};
