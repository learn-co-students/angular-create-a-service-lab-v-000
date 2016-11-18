function MathService() {
  this.sum = function(numbers) {
    return numbers.reduce(function(num1, num2) {
      return num1 + num2;
    });
  };
}

angular
  .module('app')
  .service('MathService', MathService);
