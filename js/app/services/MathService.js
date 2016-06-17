function MathService() {
  this.sum = function (array) {
    return array.reduce(function(pv, cv){return pv+cv;}, 0)
    };
}

angular
    .module('app')
    .service('MathService', MathService);
