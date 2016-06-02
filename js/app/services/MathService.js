// Your code here!
function MathService() {
  this.sum = function(array) {
    return array.reduce(function(prev, curr) {
      return prev + curr;
    });
  }
}

angular
  .module('app')
  .service('MathService', MathService);
