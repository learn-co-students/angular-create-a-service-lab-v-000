// Your code here!
function MathService() {
  this.sum = function(array) {
    return array.reduce( (prev, curr) => prev + curr );
  }
}

angular 
  .module('app')
  .service('MathService', MathService)