var myApp= angular.module("myApp",[]);

myApp.controller("myController",function($scope){
	
	console.log("in My Controller.....");
	
	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.message = "";
	
	
	$scope.users= [
	
	{username: "aparna",fullname:"nagloori",email:"aparna@gmail.com"},
	{username: "aparna",fullname:"nagloori",email:"aparna@gmail.com"},
	{username: "aparna",fullname:"nagloori",email:"aparna@gmail.com"}
	  
	];
	$scope.saveUser = function(){
		
		//console.log($scope.newUser);
		
		    $scope.users.push($scope.newUser);
			$scope.newUser = {};
			$scope.message = "New User Added Successfully";
		
	};
	$scope.selectUser = function(user){
		
		console.log(user);
		$scope.clickedUser = user;
	};
	
	$scope.updateUser = function(){
		
		$scope.message = "New User updated Successfully";
	};
	
	$scope.deleteUser = function(){
		
		$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
		$scope.message = " User Deleted  Successfully";
		
	};
	$scope.clearMessage = function(){
		$scope.message = "";
	};
	
});