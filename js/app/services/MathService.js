// Your code here!
function MathService() {
  this.sum = function(numArr){
    return numArr.reduce( (pre, cur) => pre+cur );
  };
}
angular
    .module('app')
    .service('MathService', MathService);