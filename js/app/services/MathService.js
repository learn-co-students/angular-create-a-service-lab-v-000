function MathService() {
  this.sum = function(numArray) {
    var total = numArray.reduce((a, b) => a + b, 0);
    return total;
  }
}

angular
  .module("app")
  .service("MathService", MathService)
