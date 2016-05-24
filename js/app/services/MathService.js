function MathService() {
  this.sum = function(array) {
    return array.reduce(function(a,b){
      return a + b
    }, 0);
  }
  //    THE OLD WAY. Reduce Longhand
  //   var total = 0;
  //   for(var i = 0; i < array.length; i++) {
  //     total += array[i];
  //   }
  //   return total;
  // }
}

angular
  .module('app')
  .service("MathService", MathService)