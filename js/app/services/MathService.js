// Your code here!
function MathService(){
	this.sum = function(nums){
		return nums.reduce(add, 0);

		function add(a, b) {
		    return a + b;
		}
	}
}

angular
    .module('app')
    .service('MathService', MathService)