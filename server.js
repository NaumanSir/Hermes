var express = require('express');
var socket = require('socket.io');

// Express setup
var app = express();
var server = app.listen(3000, function() {
    console.log("Listening on port 3000.")
});

app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log("socket connected")
});