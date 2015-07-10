var net = require('net'),

pad = function(val){
    return val < 10 ? '0'+val:val+'';
},

server = net.createServer(function(socket) {
    var d = new Date(), formatDate = '';

    formatDate += d.getFullYear() + '-';
    formatDate += pad(d.getMonth()+1) + '-';
    formatDate += pad(d.getDate()) + ' ';
    formatDate += pad(d.getHours()) + ':';
    formatDate += pad(d.getMinutes()) + '\n';

    socket.end(formatDate);
});

server.listen(process.argv[2]);
