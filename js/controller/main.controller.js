angular.module('chat')
	.controller('mainController', ['$scope', 'chatService', function ($scope, chatService) {
		$scope.Rooms = [
			{
				id: 1,
				name: 'Admin'
			},
			{
				id: 2,
				name: 'Employee'
			},
			{
				id: 3,
				name: 'User'
			},
			{
				id: 4,
				name: 'Common'
			}

		];
		$scope.UserName = "";
		$scope.Message = "";
		$scope.SelectedRoom = $scope.Rooms[3];
		$scope.MessageList = [];
		$scope.ChangeRoom = function (room) {
			leave();
			$scope.SelectedRoom = room;
			connect();
		}
		chatService.receive(function (msg) {
			$scope.MessageList.push(msg);
			console.log(msg);
			$scope.$apply();
		});
		function leave() {
			var userName = $scope.UserName;
			if (userName.length == 0)
				userName = 'Guest';
			chatService.leaveRoom(
				{
					roomId: $scope.SelectedRoom.id,
					userName: userName,
					message: $scope.Message
				});
		}
		function connect() {
			var userName = $scope.UserName;
			if (userName.length == 0)
				userName = 'Guest';
			chatService.connectRoom(
				{
					roomId: $scope.SelectedRoom.id,
					userName: userName,
					message: $scope.Message
				});
		}
		connect();
		$scope.send = function () {
			var userName = $scope.UserName;
			if (userName.length == 0)
				userName = 'Guest';
			var msgObj = {
				roomId: $scope.SelectedRoom.id,
				userName: userName,
				message: $scope.Message
			}

			chatService.send(msgObj);
			$scope.Message = "";
		}
	}]);