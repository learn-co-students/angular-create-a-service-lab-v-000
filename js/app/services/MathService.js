function MathService(){
  this.sum = function (array) {
    var sum = 0;
    angular.forEach(array, function(value, index){
      sum += value;
    })
    return sum; 
  };
}

angular
  .module('app')
  .service('MathService', MathService);