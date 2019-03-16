var express = require('express');

var app = express();
var server = app.listen(6000, function() {
    console.log("Listening on port 6000.")
});

app.use(express.static('public'));