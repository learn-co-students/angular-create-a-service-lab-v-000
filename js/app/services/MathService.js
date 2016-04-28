function MathService() {
  this.sum = function(numbers) {
    var sum = numbers.reduce(add, 0);

    function add(num1, num2) {
      return num1 + num2;
    }
    return sum;
  };
}

angular
  .module('app')
  .service('MathService', MathService)