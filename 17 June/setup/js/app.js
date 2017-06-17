//                      Module name, [dependencies  ]
var app=angular.module('myapp',[]);
//var x=100;
app.run(function($rootScope){
		$rootScope.abc=100;
	console.log('Hello');
});

