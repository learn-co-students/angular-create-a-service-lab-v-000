// Your code here!
function MathService() {
    this.sum = function (array) {
      var totalNumber = 0;
      for(var i = 0; i < array.length; i++) {
        totalNumber += array[i];
      }
      return totalNumber;
    };
}

angular
    .module('app')
    .service('MathService', MathService);
