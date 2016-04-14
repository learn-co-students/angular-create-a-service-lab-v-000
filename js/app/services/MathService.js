function MathService() {

    this.sum = function (numbers) {
      var sum = 0;
      numbers.forEach(function (n) {
        sum += n;
      });
      return sum;
    };
}

angular
    .module('app')
    .service('MathService', MathService);