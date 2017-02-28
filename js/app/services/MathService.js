function MathService(){
	this.sum = function(array){

		return array.reduce(function (prev, next) {
	      return prev + next;
	    });

	}
};


angular
	.module('app')
	.service('MathService', MathService);