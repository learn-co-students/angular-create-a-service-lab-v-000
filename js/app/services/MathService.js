function MathService() {
  this.sum = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) { 
      sum += array[i];
    }
    return sum;
  }
}

angular
    .module('app')
    .service('MathService', MathService);
// Your code here!
