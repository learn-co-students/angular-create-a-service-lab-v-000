// Your code here!
function MathService() {
  this.sum = function(array) {
    total = 0;

    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService);
