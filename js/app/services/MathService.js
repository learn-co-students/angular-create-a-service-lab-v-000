function MathService(){
  this.sum = function(numArr){
    return numArr.reduce(function(a, b){
      return a + b;
    });
  }
};

angular
  .module('app')
  .service('MathService', MathService);