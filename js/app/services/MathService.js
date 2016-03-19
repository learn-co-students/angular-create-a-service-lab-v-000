// Your code here!
function MathService(){
  this.sum = function(array){
    var sum = 0;
    array.forEach(function(i){
      sum+=i;
    });
    return sum;
  }
}

angular.module('app').service('MathService', MathService);
