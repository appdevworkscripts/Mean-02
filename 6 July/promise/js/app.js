var app=angular.module('myapp',[]);

app.controller('ACtrl',function($scope,$q,$http){
	var square=function(a){
		return a*a;
	}
	var asyncSquare=function(a){
		setTimeout(function(){
			console.log('calculated');
			return a*a;
		},1000);
	}
	var promisedSquare=function(a){
		return $q(function(resolve,reject){
			setTimeout(function(){
				if(a<0) reject('-ve numbers not allowed');
				console.log('calculated');
				resolve(a*a);
			},1000);
		});
	}
	
	
	$scope.submitForm=function(){
		/*
		promisedSquare($scope.num).then(function(response){
			console.log(response);
			$scope.result=response;
		},function(response){
			console.log(response);
			$scope.result=response;
		});
		*/
		$http({
			url:'http://api.fixer.io/latest',
			params:{
				base:'USD',
				symbols:'INR'
			}
		}).then(function(response){
			$scope.result=$scope.num*response.data.rates.INR;
			console.log(response.data.rates.INR);
		},function(response){
			console.log(response);
		})
	}
	$scope.refresh=function(){
		$scope.contacts=null;
		$http({
			url:'https://zenways-contact.herokuapp.com/api/contacts',
			headers:{
				key:'ABCD'
			},
			timeout:10000
		}).then(function(response){
			$scope.contacts=response.data.contacts;
			console.log(response);
		},function(response){
			console.log(response);
		})
	}
	$scope.refresh();
	$scope.submitContact=function(){
		$http({
			url:'https://zenways-contact.herokuapp.com/api/contact',
			headers:{
				key:'ABCD'
			},
			method:'POST',
			data:$scope.contact
		}).then(function(response){
			if(response.data.status){
				$scope.contact={};
				alert('Contact created');
				$scope.refresh();
			}
			console.log(response);
		},function(response){
			console.log(response);
		})
	}
});