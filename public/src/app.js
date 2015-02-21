angular.module('ratedExpApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
				controller: 'ExpTypesController',
				templateUrl: 'views/expTypesList.html' 
			})
			.when('/exptype/:id', {
				controller: 'ExpTypeController',
				templateUrl: 'views/expType.html'
			})
            .otherwise({ redirectTo: '/' });
    });