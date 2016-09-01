app.controller('TotalController', function (MathService) {
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
    ])
})

