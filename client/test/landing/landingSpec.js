//------- SPECS - TESTING -------------
describe('baby.landing', function() {

    var $controller;

    beforeEach(function() {

        module('baby.landing');

        inject(function (_$controller_) {
            // The injector unwraps the underscores (_)
            // from around the parameter names when matching
            $controller = _$controller_('LandingCtrl');
        });
    });

    //-- test controller
    describe('Controller : Landing', function() {

        it('should have an object with val 50', function () {
            expect($controller.someValue).toBe(42);
        });
    });

});
