function MathService() {

  this.sum = function(input){
    return input.reduce(function(a,b){
        return a + b
      })
  }
}

angular
  .module('app')
  .service('MathService', MathService)
