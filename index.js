//
// Launches a webserver on default port 8000 that hosts the public directory
//
//  it looks for a serverfile  as a module to pass the app to
//
var serverFile = "./src/server.js";

var express = require('express');
var app = express();
app.use(express.static('public'));
var server = require(serverFile);
server(app);
var listener = app.listen(8000, function () {
  var host = listener.address().address;
  var port = listener.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
