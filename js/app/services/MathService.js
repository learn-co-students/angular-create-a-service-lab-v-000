function MathService(){
  this.sum = function(nums){
    var sum = 0;

    nums.forEach(function(num){
      sum += num;
    };
    return sum;
  };
};

angular
  .module('app')
  .service('MathService', MathService)
