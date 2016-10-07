// Your code here!

function MathService() {
  console.log('This got hit.');
  this.sum = function(numbers) {
    var total = 0;

    numbers.forEach(function(n) {
      total += n;
    });

    return total;

  }
}

angular
  .module('app')
  .service('MathService', MathService);
