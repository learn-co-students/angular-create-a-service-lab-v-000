function MathService() {
  this.sum = function(arrayNum) {
    var total = arrayNum.reduce(function(a, b) {
      return a + b;
    }, 0);
    return total;
  };
}

angular
  .module('app')
  .service('MathService', MathService);
