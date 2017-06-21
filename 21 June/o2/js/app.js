var app=angular.module('myapp',[]);
app.run(function($rootScope){
});


app.controller('Actrl',function($scope,$rootScope){
	$scope.state=1;
	$scope.students=[];
	$scope.submitForm=function(){
		console.log($scope.student);
		if($scope.state==1)
			$scope.students.push($scope.student);
		$scope.student={};
		$scope.state=1;
	}
	$scope.deleteStudent=function(index){
		confirm('Are you sure')&&$scope.students.splice(index,1);
	}
	$scope.editStudent=function(x){
		$scope.student=x; // Copying refrence of object present in students array to the object which is actually handling the form
		$scope.state=2;
	}
});