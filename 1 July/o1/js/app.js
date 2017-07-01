var app=angular.module('myapp',['ngRoute']);

app.filter('rev',function(){
	return function(input){
		return input.split("").reverse().join("");
	}
});

app.config(function($routeProvider){
	/*
	$routeProvider.when('/a',{
		template:'<strong>A Page {{4+5}}</strong>'
	});
	$routeProvider.when('/b',{
		template:'<strong>B Page</strong>'
	});
	*/
	$routeProvider.when('/a',{
		templateUrl:'views/a.html'
	});
	$routeProvider.when('/b',{
		templateUrl:'views/b.html',
		controller:'BCtrl'
	});
	$routeProvider.when('/c/:id',{
		templateUrl:'views/c.html',
		controller:'CCtrl'
	});
	// /d?id=45
	$routeProvider.when('/d',{
		templateUrl:'views/c.html',
		controller:'DCtrl'
	});
});

app.controller('BCtrl',function($scope,$location){
	console.log('B controller loaded 1');
	$scope.myClick=function(){
		console.log('Function called');
		$location.path('/c/'+$scope.test)
	}
	$scope.num=45.22732123;
	$scope.mydate=new Date(2015,11,25);
	
	$scope.students=[
		{name:'Pqr',roll:4},
		{name:'Xyz',roll:1},
		{name:'Mno',roll:5},
		{name:'abc',roll:7},
		{name:'rst',roll:3},
		{name:'Efg',roll:2},
	];
	$scope.obj={
		a:45,
		b:'90'
	}
});
app.controller('CCtrl',function($routeParams,$scope){
	console.log('C controller loaded  '+$routeParams.id);
	$scope.id=$routeParams.id;
});
app.controller('DCtrl',function($location,$scope){
	console.log('C controller loaded  '+$location.search().id,$location.search().mid);
	$scope.id=$location.search().id;
});