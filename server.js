var express = require('express');
var app = express();
var server = require('http');

app.get('/',function(req,res){
  res.send("Hello");
});

app.listen(8080);