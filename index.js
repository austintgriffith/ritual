//
// Launches a webserver on default port 8000 that hosts the public directory
//
//  it looks for a serverfile  as a module to pass the app to
//
var express = require('express');
var app = express();
var http = require('http').createServer(app);
app.use(express.static('build'));
var bodyParser = require("body-parser");
app.use(bodyParser.raw())
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var serverFile = "./src/server.js";
var server = require(serverFile);
server.init(app,http);
var port = 8000;
if(server.port) port=server.port;

var listener = http.listen(port,'0.0.0.0', function () {
  var host = '0.0.0.0';
  var port = listener.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
