// Your code here!
function MathService() {

  this.sum = function(array) {
    var total = 0;
    array.forEach(function(entry) {
      total += entry;
    });
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService);
