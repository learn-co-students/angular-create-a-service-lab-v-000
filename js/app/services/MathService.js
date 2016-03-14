function MathSevice () {
  this.sum = function (numbersArray) {
    return numbersArray.reduce(function (prev, next) {
      return prev + next;
    })
  }
}

angular
  .module('app')
  .service('MathSevice', MathSevice);
