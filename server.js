var express = require('express')
var app = express()

app.use(express.static('./public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/shim', function(req, res) {
  res.sendFile(__dirname + '/public/shim.html');
});

app.listen(3000, function(){
  console.log('running :3000')
})