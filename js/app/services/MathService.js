function MathService() {
  this.sum = function (arrayOfNumbers) {
    return arrayOfNumbers.reduce(function (a, b) {
      return a + b;
    });
  };
}

angular
  .module('app')
  .service('MathService', MathService )
