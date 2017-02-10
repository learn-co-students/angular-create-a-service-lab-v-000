function MathService() {
  this.sum = function (array) {
    return array.reduce(function(previousValue, currentValue) {
      return currentValue + previousValue;
    })
  };
}

angular
  .module('app')
  .service('MathService', MathService);
