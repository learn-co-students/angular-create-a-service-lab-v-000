function MathService() {
  this.sum = function(nums) {
    var sum = 0
    for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  };
}
angular
  .module('app')
  .service('MathService', MathService);
