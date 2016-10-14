// Your code here!
function MathService() {
  this.sum = function(array) {
    sum = 0;
    for (var i = 0, x = array.length; i < x; i++){
      sum += array[i];
    }
    return sum;
  };
}

angular
  .module('app')
  .service('MathService', MathService);
