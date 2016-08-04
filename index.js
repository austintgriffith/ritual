//
// Launches a webserver on default port 8000 that hosts the public directory
//
//  it looks for a serverfile  as a module to pass the app to
//

var express = require('express');
var app = express();
var http = require('http').createServer(app);


var bodyParser = require("body-parser");
app.use(bodyParser());

var serverFile = "./src/server.js";
var server = require(serverFile);
server.init(app,http);
var port = 8000;
if(server.port) port=server.port;

app.use(express.static('build'));

var listener = http.listen(port,'0.0.0.0', function () {
  var host = '0.0.0.0';
  var port = listener.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
