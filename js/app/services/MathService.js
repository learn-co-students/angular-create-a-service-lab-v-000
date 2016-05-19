function MathService (){
  this.sum = function(ary){
    return ary.reduce(function(p,c){return p+c});
  };
}

angular
    .module('app')
    .service('MathService', MathService);
