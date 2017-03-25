// Your code here!
function MathService() {
	this.sum = function(arr){
		var total = 0
		for (var i = 0; i < arr.length; i++) {
			total += arr[i]
		}
		return total;
	}
}

angular
	.module('app')
	.service("MathService", MathService)