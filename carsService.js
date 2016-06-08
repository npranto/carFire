angular.module('carFire')
	.service('', function(){
		
		var url = "https://carsfire.firebaseio.com/cars/";

		this.getCars = function(){
			var carsRef = new firebase(url);
			return carsRef;
		}

		this.getCar = function(id){
			var carRef = new firebase(url + id);
			return carRef;
		}

		this.getComments = function(id){
			var commentsRef = new firebase(url + id + 'comments');
			return commentsRef;
		}

	})