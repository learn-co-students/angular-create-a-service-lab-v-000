// Your code here!
function MathService() {
  this.sum = function (arr) {
    var sum = arr.reduce(add, 0);

    function add(a, b) {
        return a + b;
    }

    return sum;
  };
}

angular
  .module('app')
  .service('MathService', MathService);