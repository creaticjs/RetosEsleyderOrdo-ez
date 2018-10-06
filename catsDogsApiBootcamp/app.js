var express = require('express');
var app = express();
var http = require('http').Server(app);
path = require('path');



app.get('/', function(req, res){
  res.sendFile(__dirname + '/templates/app.html');
});
app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/templates/chat.html');
});

app.use(express.static(__dirname + '/public'));


http.listen(4000, function(){
  console.log('listening on *:4000');
});
