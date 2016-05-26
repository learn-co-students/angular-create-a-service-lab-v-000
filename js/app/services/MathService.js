function MathService() {
  this.sum = function(array) {
    var result = 0;
    array.forEach(function(num){
      result += num;
    });
    return result;
  }
}

angular
  .module('app')
  .service('MathService', MathService)
