function MathService() {
    this.sum = function (numbersArray) {
      return numbersArray.reduce(function(sum, num){
        return sum + num;
      }, 0);
    };
}

angular
    .module('app')
    .service('MathService', MathService);
