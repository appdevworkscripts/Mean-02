var app=angular.module('myapp',[]);
app.constant('API_PREFIX',encodeURI('http://x.com/gh\\&a'));
app.value('sum',function(a,b){
	return a+b;
}).value('sub',function(a,b){
	return a-b;
});
app.factory('MyMath',function(API_PREFIX,$location){
	return {
		square:function(a){
			return a*a;
		},
		cube:function(a){
			return a*a*a;
		}
	}
});
app.service('MyMathService',function(API_PREFIX,$location){
	this.square=function(a){
		return a*a;
	};
	this.cube=function(a){
		return a*a*a;
	}
});
app.run(function(API_PREFIX,sum,MyMath){
	console.log(API_PREFIX);
	console.log(sum(7,8));
	console.log(MyMath.square(7));
	console.log(MyMath.cube(7));
});

app.controller('Actrl',function($scope,API_PREFIX,sub){
	console.log(API_PREFIX);
	
	console.log(sub(7,8));
});