function MathService () {
  this.sum = function (numbersArray) {
    return numbersArray.reduce(function (prev, next) {
      return prev + next;
    })
  };
}

angular
  .module('app')
  .service('MathService', MathService);
