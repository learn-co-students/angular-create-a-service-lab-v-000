// Your code here!
function MathService() {
  this.sum = function(numArray) {
    var sum = 0;
    numArray.forEach(function (num) {
      sum += num;
    });
    return sum
  };
}

angular
  .module('app')
  .service('MathService', MathService);
