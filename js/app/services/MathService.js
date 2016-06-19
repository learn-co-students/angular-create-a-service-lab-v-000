// Your code here!
function MathService() {
    this.sum(array) = function () {
      var total = 0;
      $.each(array, function(index, value) {
        total += value;
      });
      return total;
    };
}

angular
    .module('app')
    .service('SomeService', SomeService);
