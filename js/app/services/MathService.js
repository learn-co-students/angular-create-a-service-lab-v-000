function MathService(){
	this.sum = function(array){
		var sum = 0;
		array.map(function(item){
			sum += item;
		})	
		return sum;
	}

}

angular
    .module('app')
    .service('MathService', MathService);