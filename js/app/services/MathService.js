function MathService() {
	this.sum = function(array) {
		return array.reduce(add, 0);
	}

	function add(a, b) {
    return a + b;
  }
}


angular
	.module('app')
	.service('MathService', MathService);