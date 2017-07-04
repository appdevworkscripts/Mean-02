var app=angular.module('myapp',['ngRoute','ngMessages']);

app.config(function($routeProvider){
	$routeProvider.when('/form',{
		templateUrl:'views/form.html',
		controller:'FormController'
	});
});


app.controller('FormController',function($scope){
	$scope.formSubmit=function(){
		console.log($scope.contact);
	}
});