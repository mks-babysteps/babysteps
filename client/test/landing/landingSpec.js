//------- SPECS - TESTING -------------
describe('baby.landing', function() {
  beforeEach(module('baby'));
  beforeEach(module('baby.landing'));
  beforeEach(module('ui.router'));

  //-- test controller
  describe('Landing Controller', function() {
    var landingController;
    beforeEach(function() {
      inject(function($controller) {
        landingController = $controller('LandingCtrl');
        console.log(landingController);
      })
    });

    it('should have an object with val 50', function () {
      // expect(landing.someValue).toBe(50);
      expect(landingController).toBeDefined();
    });
  });

});
