myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'views/list.html',
		controller: 'ListController'
	}).
	when('/details/:counter', {
		templateUrl: 'views/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);