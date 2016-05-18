function MathService() {
  this.sum = function(arr){
    return arr.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
  }
}

angular
  .module('app')
  .service('MathService', MathService)
