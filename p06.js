var checkExtension = require('./p05-1.js');

checkExtension(process.argv[2], process.argv[3], function(err, data){
    data.forEach(function(val){
        console.log(val);
    });
});
