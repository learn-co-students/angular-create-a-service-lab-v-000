// Your code here!

function MathService() {
  this.sum = function(array) {
    // initiate variable at 0
    var sumTotal = 0;
    // iterate over array and add amount to variable
    for(var i = 0; i < array.length; i++) {
      sumTotal += array[i];
    }
    // return the variable which is sent to the controller
    return sumTotal;
  };
}

angular
  .module('app')
  .service('MathService', MathService);
