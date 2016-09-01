app.service('MathService', function(){

  this.sum = function(array){

    function add(a, b) {
      return a + b;
    }
    var sum = array.reduce(add, 0)
    return sum
  }
})
