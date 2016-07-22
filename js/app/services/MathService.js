function MathService(){
  this.sum = function(arr){
      var total=0;
       arr.forEach(function(e){
        total += e;
      });
      return total;
  };
}

angular
  .module('app')
  .service('MathService', MathService);
