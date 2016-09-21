// Your code here!
function MathService() {
  this.sum = function(values) {
    var total = 0;
    for (var i = 0; i < values.length; i++) {
      total += values[i];
    }
    return total;
  };
}

angular
    .module('app')
    .service('MathService', MathService);