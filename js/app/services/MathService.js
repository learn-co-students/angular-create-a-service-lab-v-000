function MathService() {
	this.sum = function(numArray) {
		var sumAll = numArray.reduce(function(num1, num2) {
			return num1 + num2;	
		});
		return sumAll;
	};
}

angular
	.module('app')
	.service('MathService', MathService);