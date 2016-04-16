// Your code here!
function MathService() {
  this.sum = function(array) {
    var total = array.reduce(add, 0);
    function add(a,b) {
      return a + b;
    }
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService);