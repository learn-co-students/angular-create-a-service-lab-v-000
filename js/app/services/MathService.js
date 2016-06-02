// Your code here!

function MathService() {
  this.sum = function(numbers) {
    return numbers.reduce( (prev, curr) => prev + curr );
  }
}
angular.module('app').service('MathService', MathService);
