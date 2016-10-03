// Your code here!
function MathService(){
  this.sum = function(array){
  
    sum = 0;

    for(i = 0; i < array.length; i++)
    {
      sum += array[i];
    }
    return sum;
  }

}


angular
.module('app')
.service('MathService', MathService)



