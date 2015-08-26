var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port =  3000;
var rootDir = __dirname;

app.use(express.static('bower_components'));
app.use(express.static('js'));
app.get('/', function(req, res){
	
	res.sendFile(rootDir + '/index.html');
});



io.on('connection', function(socket){
	console.log('a user connect');
	socket.on('chat', function(msg){
		console.log('User: ' + msg.userName + ' Message ' + msg.message);
		// io.emit('chat', msg);
		socket.broadcast.to(msg.roomId).emit('chat', msg);
	});
	socket.on('connectRoom', function(obj){
		socket.join(obj.roomId);
		if(obj.roomId == 1){
			socket.join(2);
			socket.join(3);
			socket.join(4);
			console.log('Admin Join');
		}
		console.log('User: ' + obj.userName + ' Join Room# ' + obj.roomId);
	});
	socket.on('leaveRoom', function(obj){
		socket.leave(obj.roomId);
		if(obj.roomId == 1){
			socket.leave(2);
			socket.leave(3);
			socket.leave(4);
			console.log('Admin Leave');
		}
		console.log('User: ' + obj.userName + ' Leave Room# ' + obj.roomId);
	})
	socket.on('disconnect', function(){
		console.log('user disconnect');
	});
})

http.listen(port, function(){
	console.log('server running on PORT#' + port);
	
})
