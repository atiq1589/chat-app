var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var socket_middle = require('./chat-module/socket');
var port = process.env.PORT ||  4000;
var rootDir = __dirname;



app.use(express.static('bower_components'));
app.use(express.static('js'));
app.use(express.static('views'));
app.get('/*', function(req, res){
	
	res.sendFile(rootDir + '/index.html');
});


var server = app.listen(port, function(){
	console.log('server running on PORT#' + port);
	
});

socket_middle(server, process.env.Redis);
