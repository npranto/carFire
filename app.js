angular.module('carFire', ['ui.router', 'firebase'])
	.config(function ($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('cars', {
			url: '/cars',
			templateUrl: './templates/cars.tpl.html',
			controller: 'carsCtrl',
			resolve:{
				carsRef: function(carsService){
					return carsService.getCars();
				}
			}
		})

		.state('car', {
			url: '/car/:carId',
			templateUrl: './templates/car.tpl.html',
			controller: 'carsCtrl',
			resolve:{
				carRef: function(carsService, $stateParams){
					return carsService.getCars($stateParams.carId);
				},
				commentRef: function(carsService, $stateParams){
					return carsService.getComments($stateParams.carId);
				}
			}
		})


	})