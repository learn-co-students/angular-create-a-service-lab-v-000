// Your code here!
function MathService() {
	this.sum = function(arr) {
		return arr.reduce(function(acc, value) { return acc + value }, 0)
	}
}

angular
	.module('app')
	.service("MathService", MathService)