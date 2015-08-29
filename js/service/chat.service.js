

angular.module('chat').service('chatService', ['$location', function ($location) {
	var pattern = /[^a-z0-9]/g;
	var nameSpace = $location.host().replace(pattern, '');
	console.log(nameSpace);
	// var socket = io("/" + nameSpace);
	var socket = io();

	return {
		connectRoom: connectRoom,
		leaveRoom: leaveRoom,
		send: send,
		receive: receive
	}
	function connectRoom(obj) {
		socket.emit('connectRoom', obj);
	}
	function leaveRoom(obj) {
		socket.emit('leaveRoom', obj);
	}
	function send(msgObj) {
		console.log($location.host());
		socket.emit('chat', msgObj);
	}
	function receive(callBackFn) {
		socket.on('chat', function (msg) {

			callBackFn(msg);
		});
	}


}]);