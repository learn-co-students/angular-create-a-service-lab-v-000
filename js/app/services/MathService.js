function MathService(){
  this.sum = function(numArray){
    return numArray.reduce(function(previousValue, currentValue,currentIndex,array){
      return previousValue + currentValue;
    });
  }
}

angular
  .module('app')
  .service('MathService', MathService);
