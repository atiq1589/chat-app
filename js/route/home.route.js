angular.module('chat').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/',{
		templateUrl: "/home.html",
		controller: 'HomeCtrl'
	}).when('/home',{
		templateUrl: "/home.html",
		controller: 'HomeCtrl'
	});
	$locationProvider.html5Mode(true);
}]);