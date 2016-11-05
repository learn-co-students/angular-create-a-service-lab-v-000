function MathService() {
    function doMath(numbers) {
      var total = 0;
      for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    }
 
    this.sum = function (numbers) {
        return doMath(numbers);
    };
}
 
angular
    .module('app')
    .service('MathService', MathService);