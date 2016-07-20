function MathService() {
  this.sum = function(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    };
    return total;
  };
}

angular
  .module('app')
  .service('MathService', MathService);
