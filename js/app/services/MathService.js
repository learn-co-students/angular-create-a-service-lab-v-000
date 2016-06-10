function MathService () {
  this.sum = function(num){
    var total = 0;

    for(var i = 0; i < num.length; i++){
      total += num[i];
    }
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService);