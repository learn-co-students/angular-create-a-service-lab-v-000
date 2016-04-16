// Your code here!
function MathService(){
  this.sum = function (math){
    var i = 0;
    math.forEach(function(x){
      i += x;
    });
    return i;
  };
}

angular
  .module('app')
  .service('MathService', MathService);
