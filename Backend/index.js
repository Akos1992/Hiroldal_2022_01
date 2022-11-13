const static = require('node-static');
const http = require('http');
const express = require('express');

var app = express();

var file = new(static.Server)("../Frontend");

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(8080);


app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Híroldal szerver fut: http://%s:%s", host, port)
})