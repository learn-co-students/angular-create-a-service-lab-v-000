function MathService() {

  this.sum = function (nums) {
    return nums.reduce((a, b) => a + b, 0)
  }

}

angular
  .module('app')
  .service('MathService', MathService)