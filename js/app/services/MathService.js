 // Your code here!

 function MathService() {
   this.sum = function (num_array) {
     return num_array.reduce(function (a, b) {
       return a + b;
     })
   };
 }

angular
  .module('app')
  .service('MathService', MathService)
