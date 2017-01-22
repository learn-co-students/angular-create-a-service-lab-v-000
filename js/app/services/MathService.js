function MathService() {
  this.sum = function(array) {
    var total = 0;

    array.forEach(function(num) {
      total += num;
    });

    return total;
  };
}

angular
  .module('app')
  .service('MathService', MathService);