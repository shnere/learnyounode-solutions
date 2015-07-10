var arg = Array.prototype.slice.call(process.argv).slice(2);

var asd = arg.reduce(function(prev, cur){
    return Number(prev) + Number(cur);
});

console.log(asd);
