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
    var expectedName = "Leanne Graham";
    var result;

    httpBackend.expectGET('http://jsonplaceholder.typicode.com/users/1')
      .respond(expectedName);

    // httpBackend.flush();

    httpBasedService.getName(1).then(function(data) {
      result = data.data;
      console.log('MY RESULT: ', result);
      expect(result).toEqual(expectedName);
    })

    // expect(result).toEqual(expectedName);
    // console.log('BEFORE FLUSH: ', result);

    httpBackend.flush();

    // console.log('AFTER FLUSH: ', result);
    // expect(result).toEqual(expectedName);

  });

})
