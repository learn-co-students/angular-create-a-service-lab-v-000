// Your code here!
function MathService() {
    // function privateMethod() {

    // }

    this.sum = function (arr) {
      var total = arr.reduce(function(a, b) {
        return a + b;
      });
      return total;
    }
}

angular
  .module('app')
  .service('MathService', MathService);