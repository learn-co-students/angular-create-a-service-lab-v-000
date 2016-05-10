function TotalController(MathService) {
    this.sum = MathService.sum([
        2,
        3,
        4,
        12,
        23,
        56,
        73,
        4,
        889
    ]);
}

angular
    .module('app')
    .controller('TotalController', TotalController)
    .service('MathService');
