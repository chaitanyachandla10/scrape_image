var app = angular.module('myapp',['ui.router']);
app.config(function($stateProvider)
{
	$stateProvider
	.state('search',{
		url:'ctr',
		templateUrl:'index.html',
		params:{
				xyz :null
			},
		controller:'ctr'
		})
	$stateProvider
	.state('keyword',{
		url:'keyword_search',
		templateUrl:'keyword.html',
		params:{
				xyz :null
			},
		controller:'ctr1'
		})
});