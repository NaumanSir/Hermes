var express = require('express');
var socket = require('socket.io');

// Express setup
var app = express();
var server = app.listen(3000, function(){
    console.log("Listening on port 3000.")
});

app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log("socket connected", socket.id);
    socket.on("chat", function(data){
        io.sockets.emit("chat", data);
    });
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});