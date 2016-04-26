// Your code here!
function MathService(){

  this.sum = function(numbers){
    return numbers.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
  }

}

angular
  .module('app')
  .service("MathService", MathService)