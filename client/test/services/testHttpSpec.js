describe('httpBasedService', function() {
  var httpBasedService;
  var httpBackend;

  beforeEach(function() {
    module('baby');

    inject(function($httpBackend, _test_) {
      httpBasedService = _test_;
      httpBackend = $httpBackend;
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should send a user id and receive back a name', function() {
    var expectedName = 'Leanne Graham';
    var result;

    httpBackend.expectGET('http://jsonplaceholder.typicode.com/users/1')
      .respond(expectedName);

    httpBasedService.getName(1).then(function(data) {
      result = data.data;
      expect(result).toEqual(expectedName);
    });

    httpBackend.flush();

  });

});
