// Your code here!
function MathService(){
  this.sum = function(arrayOfNums){
    var total = 0;
    for(var i=0; i < arrayOfNums.length ; i++){
      total = total + arrayOfNums[i];
    }
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService)
