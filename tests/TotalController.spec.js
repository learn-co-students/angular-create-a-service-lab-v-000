describe('TotalController', function () {
    var $controller, MathService;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        MathService = $injector.get('MathService');
    }));


    it('should sum up correctly', function () {
        expect(MathService.sum([1,2])).toBe(3);
        expect(MathService.sum([15,223])).toBe(238);
    });

});
