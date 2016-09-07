// Your code here!
function MathService() {
    this.sum = function (array) {
 		var sum = 0;
 		for(var x = 0; x < array.length; x++){
 			sum += array[x];
 		};
 		return sum;
    };
}
 
angular
    .module('app')
    .service('MathService', MathService);
