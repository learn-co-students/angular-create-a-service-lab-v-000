function MathService() {

   this.sum = function(args) {
    var count = 0;
    for (var i=0; i < args.length; i++) {
      count += args[i]
    }
    return count;
  }

}


angular
  .module('app')
  .service('MathService', MathService);
