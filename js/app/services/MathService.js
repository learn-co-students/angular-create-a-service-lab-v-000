// Your code here!
function MathService() {
	this.sum = function(arr) {
		return arr.reduce(function(sum, i){
			return sum + i;
		});
	}
}

angular
	.module('app')
	.service('MathService', MathService);