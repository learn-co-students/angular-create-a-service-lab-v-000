function MathService(){
  this.sum = function(arr){
    return arr.reduce(function(a, b){
      return a + b;
    });
  };
}

angular.module('app')
  .service('MathService', MathService);