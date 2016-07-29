// Your code here!
function MathService() {
  this.sum = function(numbers) {
    return numbers.reduce((a,b) => a + b, 0);
  }
}

angular
    .module('app')
    .service('MathService', MathService);
