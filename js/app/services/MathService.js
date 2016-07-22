// Your code here!
function MathService(){
  this.sum = function(array){
    return parseInt(array[0]) + parseInt(array[1])
  };
};

angular
  .module('app')
  .service('MathService', MathService);
