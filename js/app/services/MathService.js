// Your code here!
function MathService (){
  this.sum = function(numArray){
    return numArray.reduce((a, b) => a + b, 0);
  }
}

angular
  .module('app')
  .service('MathService', MathService)