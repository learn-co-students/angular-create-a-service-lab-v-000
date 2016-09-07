function MathService() {

  this.sum = function(array) {

    total = 0
    for (i = 0; i < array.length; i ++) {

      total = total + array[i]
    }
    debugger
    return total

  }


}
angular 
  .module('app')
  .service('MathService', MathService)