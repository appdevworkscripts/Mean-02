var app=angular.module('myapp',[]);
app.run(function($rootScope){
});


app.controller('Actrl',function($scope,$rootScope){
	$scope.arr=[5,8,9,1,4,3];
	$scope.myClick=function(){
		console.log($scope.x);
		console.log($scope.num);
		console.log($scope.mdate.getTime());
	}
	$scope.students=[
		{name:'Pqr',roll:4},
		{name:'Xyz',roll:1},
		{name:'Mno',roll:5},
		{name:'abc',roll:7},
		{name:'rst',roll:3},
		{name:'Efg',roll:2},
	];
});