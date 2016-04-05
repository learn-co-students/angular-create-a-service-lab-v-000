// Your code here!
function MathService(){
  
  function getSum(total, num) {
    return total + num;
  }

  this.sum = function(array){
    return array.reduce(getSum);
  }

}

angular
  .module('app')
  .service('MathService', MathService)