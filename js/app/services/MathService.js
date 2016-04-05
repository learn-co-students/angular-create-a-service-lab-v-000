function MathService() {
  this.sum = function (numbers) {
    return numbers.reduce(function (a, b) {
      return a + b;
    });
  }
}

angular
  .module('app')
  .service('MathService', MathService);
