function MathService() {
  this.sum = function(arr) {
    return arr.reduce( (a, b) => a + b, 0);
  }
};

angular
  .module('app')
  .service('MathService', MathService);
