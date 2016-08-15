// Your code here!

function MathService() {
    this.sum = function (array) {
      return array.reduce(function(a,b) {return a + b});
    };
}

angular
    .module('app')
    .service('MathService', MathService);