// Your code here!
function MathService() {
   this.sum = function(array){
      var total =0;
      for(let i =0; i<array.length; i++){
        total = array[i] + total;
      }
      return total;
  }

}

angular
    .module('app')
    .service('MathService', MathService);
