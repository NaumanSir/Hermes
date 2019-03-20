var socket = io.connect("http://localhost:3000");


// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var send = document.getElementById('send');
var output = document.getElementById('output');

// Emitting events
btn.addEventListener('click', function(){
    socket.emit('chatmsg', {
        message: message.nodeValue,
        handle: handle.value
    })
});

// Listening for events
socket.on('chatmsg', function(data){
    output.innerHTML += '<p><strong>' + data.handle +
    ': </strong>' + data.message + '</p>';
});