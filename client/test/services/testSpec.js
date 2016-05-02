describe('testService', function() {
  var test;
  beforeEach(function() {
    module('baby');
    inject(function(_test_) {
      test = _test_;
    });
  });

  it('should have a double function', function() {
    expect(angular.isFunction(test.double)).toBe(true);
  });

  it('should double a given value by 2', function () {
    var result = test.double(2);
    expect(result).toEqual(4);
  });
});

// basic testing for factories
