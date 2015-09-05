angular.module('chat').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/',{
		templateUrl: "/home.html",
		controller: 'MainCtrl'
	}).when('/home',{
		templateUrl: "/home.html",
		controller: 'MainCtrl'
	});
	$locationProvider.html5Mode(true);
}]);