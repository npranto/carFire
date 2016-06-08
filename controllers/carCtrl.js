angular.module('carFire')
	.controller('carCtrl', function($scope, carsRef, commentsRef, $firebaseArray, $firebaseObject){
		
		$scope.car = $firebaseObject(carRef);
		$scope.comments = $firebaseArray(commentsRef);














	})