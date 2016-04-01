function MathService(){

  this.sum = function (array){
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total = total + array[i];
    };
    return total;
  };

};

angular
  .module('app')
  .service('MathService', MathService)
