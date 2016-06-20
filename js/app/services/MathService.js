function MathService() {
  this.sum = function(array) {
    var sum = 0
    array.forEach(function(num){
      sum = sum + num;
    });
    return sum
  };
};

angular
  .module('app')
  .service('MathService', MathService);


//array.forEach(function(currentValue,index,arr), thisValue)