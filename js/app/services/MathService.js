function MathService() {
  this.sum = function(numbers) {
    var total = 0;
    numbers.forEach(function(num) {
      total += num;
    });
    return total;
  };
};

angular
  .module('app')
  .service('MathService', MathService)
