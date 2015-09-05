angular.module('chat').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.otherwise({
		redirectTo: "/404"
	}).when('/404', function(){
		templateUrl: "/"
	});
	$locationProvider.html5Mode(true);
}]);