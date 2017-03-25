// Your code here!
function MathService() {
	this.sum = function(arr) {
		return arr.reduce((acc, value) => {return acc + value})
	}
}

angular
	.module('app')
	.service("MathService", MathService)