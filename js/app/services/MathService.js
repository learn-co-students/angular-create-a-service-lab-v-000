function MathService() {
    this.sum = function(numberArray) {
      return numberArray.reduce(function (a, b) {
        return a + b;
      });
    };
}

angular
    .module('app')
    .service('MathService', MathService);
