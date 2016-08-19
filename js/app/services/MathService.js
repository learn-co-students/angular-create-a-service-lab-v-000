// Your code here!
function MathService(){
  this.sum = function(array){
    this.array = array;
    this.total = 0;
    for(i = 0; i < this.array.length; i++){
      this.total += array[i];
    }
    return this.total;
  }
}

angular
  .module('app')
  .service('MathService', MathService)
