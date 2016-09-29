function MathService() {
    this.sum = function(arr) {
        total = 0;
        for (i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
      }
}

angular
    .module('app')
    .service('MathService', MathService)