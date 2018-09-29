var express = require('express');
var app = express();
var http = require('http').Server(app);
path = require('path');



app.get('/', function(req, res){
  res.sendFile(__dirname + '/templates/app.html');
});
// About movies.
app.get('/movies', function (req, res) {
  res.sendFile(__dirname + '/templates/movies.html');
})
// About page route.
app.get('/credits', function (req, res) {
  res.sendFile(__dirname + '/templates/credits.html');
})

app.use(express.static(__dirname + '/public'));


http.listen(4000, function(){
  console.log('listening on *:4000');
});

module.exports = app;