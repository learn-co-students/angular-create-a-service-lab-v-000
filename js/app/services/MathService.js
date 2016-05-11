function MathService () {
  this.sum = function (numberArray) {
    var total =  numberArray.reduce(function(a,b){
      return parseFloat(a) + parseFloat(b);
    });

    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService);