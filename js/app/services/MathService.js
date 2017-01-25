// Your code here!
function MathService() {
  this.sum = function(array){
    var sum = 0;
    for (let i = 0; i < array.length; i++){
      sum = sum + array[i];
    }
    return sum;
  }
}

angular
  .module('app')
  .service('MathService', MathService)
