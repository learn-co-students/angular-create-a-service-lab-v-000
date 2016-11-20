// Your code here!
function MathService() {
  this.sum = function(arr) {
    var total = 0;
    arr.forEach(function(val) {
      total += val;
    })
    return total
  }
}

angular
  .module('app')
  .service('MathService', MathService);
