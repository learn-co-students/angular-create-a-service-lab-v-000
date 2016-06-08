function MathService() {
  this.sum = function (arr) {
    return arr.reduce(function (prev, next) {
      return prev + next;
    })
  };
}

angular
  .module('app')
  .service('MathService', MathService);