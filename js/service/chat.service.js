

angular.module('chat').service('chatService', [function () {
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
		socket.emit('chat', msgObj);
	}
	function receive(callBackFn) {
		socket.on('chat', function (msg) {

			callBackFn(msg);
		});
	}


}]);