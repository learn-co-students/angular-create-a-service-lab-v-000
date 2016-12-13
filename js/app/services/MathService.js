function MathService() {
  this.sum = function(numArray) {
    var answer = 0
    numArray.forEach(function(num) {
      answer = answer + num;
    })
    return answer
  }
}

angular
  .module('app')
  .service('MathService', MathService)