function MathService(){
  
  this.sum = function(arr){
    var total = 0;
    angular.forEach(arr, function(v, i){
      total += v;
    });
    return total;
  };

}

angular
  .module('app')
  .service('MathService', MathService);
