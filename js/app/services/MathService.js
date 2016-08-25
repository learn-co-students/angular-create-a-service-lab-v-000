function MathService() {
  this.sum = function(nums) {
    debugger;
    return nums.reduce(function(a, b){return a+b;})
  }
}

angular
  .module('app')
  .service('MathService', MathService);
