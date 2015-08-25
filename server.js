var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port =  3000;
var rootDir = __dirname;
app.get('/', function(req, res){
	
	res.sendFile(rootDir + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connect');
	socket.on('chat', function(msg){
		console.log('Message ' + msg);
		io.emit('chat', msg);
	});
	socket.on('disconnect', function(){
		console.log('user disconnect');
	});
})

http.listen(port, function(){
	console.log('server running on PORT#' + port);
	
})
