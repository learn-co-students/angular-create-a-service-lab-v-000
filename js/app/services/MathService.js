// Your code here!
function MathService() {
  this.sum = function (numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  };
}

angular
  .module('app')
  .service('MathService', MathService);
