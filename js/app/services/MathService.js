// Your code here!

function MathService() {
  this.sum = function (arr) {
    return arr.reduce(function (x, y) {
      return x + y;
    })
  };
}

angular
  .module('app')
  .service('MathService', MathService);
