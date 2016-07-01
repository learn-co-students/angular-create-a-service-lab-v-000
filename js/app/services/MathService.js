function MathService(){
 
    this.sum = function (array) {
        var total = array.reduce(function(a, b) {
          return a + b;
        });

        return total;
    };
}

angular
    .module('app')
    .service('MathService', MathService);