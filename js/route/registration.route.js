angular.module('chat').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/registration',{
		templateUrl: "/registration.html",
		controller: 'RegistrationCtrl'
	});
	$locationProvider.html5Mode(true);
}]);