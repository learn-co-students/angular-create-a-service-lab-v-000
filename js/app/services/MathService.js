function MathService() {
	this.sum = function(numbers) {
		var sum = 0
		numbers.forEach(function(number) {
			// make sure item in array is of type number so as not to throw error
			if (typeof(number) === "number") {
				sum += number;
			}
		});
		return sum;
	}
}

angular
	.module('app')
	.service('MathService', MathService)
