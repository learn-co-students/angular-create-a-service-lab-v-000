function MathService() {
  this.sum = function(numbers){
    return numbers.reduce(function(prevValue, currentValue){
      return prevValue + currentValue;
    });
  };
}

angular
  .module('app')
  .service('MathService', MathService);