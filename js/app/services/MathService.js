function MathService() {

    this.sum = function(array) {

    var total = array.reduce(function(a, b) {
        return a + b
      }, 0)
      return total
    };
  }

angular
    .module('app')
    .service('MathService', MathService);
