angular.module('app')
  .service('MathService', function () {
    this.sum = (arr) => arr.reduce((a, b) => a + b)
  })
