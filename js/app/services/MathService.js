function MathService() {
  this.sum = function (array) {
    // Sum values from an array
    return array.reduce((pv, cv) => pv+cv, 0);
  }
}

angular
  .module('app')
  .service('MathService', MathService)
