function MathService() {
  this.sum = function(array){
    var total = 0
    array.forEach(function(val) {
      total += val;
    })
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService);
