// Your code here!
function MathService(){
  this.sum = function(array){
    var sum = 0;
    // console.log(array);
    array.forEach(function(num){
      sum += num
    });
    return sum;
  };
}


angular
  .module('app')
  .service('MathService', MathService);
