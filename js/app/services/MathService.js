// Your code here!
function MathService() {
		function add(a,b){
			return a + b;
		}
    this.sum = function (numbers) {
 			return numbers.reduce( add, 0);
    };
}
 
angular
    .module('app')
    .service('MathService', MathService);