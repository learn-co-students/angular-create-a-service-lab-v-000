// Your code here!
function MathService() {
  this.sum = function(array) {
    var total = array.reduce(function(total, num) {
      return total + num;
    });
    return total;
  };
}

angular
  .module('app')
  .service('MathService', MathService);
