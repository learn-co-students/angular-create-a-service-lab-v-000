function MathService() {
  this.sum = function(array) {
    return array.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
  }
}

angular
  .module('app')
  .service('MathService', MathService);
