function MathService() {
  this.sum = function (array) {
    var total = 0
    for (var i = array.length - 1; i >= 0; i--) {
      total += array[i]
    }
    return total
  }
}

angular
  .module("app")
  .service("MathService", MathService)
