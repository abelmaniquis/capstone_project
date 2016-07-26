var express = require('express');
var app = express();
var server = require('http');

app.get('/',function(req,res){
  res.send("Hello, initial server setup");
});

app.listen(8080);