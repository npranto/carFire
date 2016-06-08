angular.module('carFire')
	.controller('carsCtrl', function($scope){
		
		$scope.cars = $firebaseArray(carsRef);














		
	})