// describe('auth', function() {
//   var auth;
//   var httpBackend;

//   beforeEach(function() {
//     module('baby');

//     inject(function($httpBackend, _auth_) {
//       auth = _auth_;
//       httpBackend = $httpBackend;
//     });
//   });

//   // afterEach(function() {
//   //   httpBackend.verifyNoOutstandingExpectation();
//   //   httpBackend.verifyNoOutstandingRequest();
//   // });

//   it('auth - get success', function() {
//     var expectedName = {success: false, message:'Username and password is invalid!'};
//     var result;

//     // httpBackend.expectGET('http://localhost:8080/login')
//     //   .respond(expectedName);

//     auth.signIn('tiff', 'tiff').then(function(data) {
//       result = data.data;
//       console.log(data);
//       expect(result).toEqual(expectedName);
//     });

//     // httpBackend.flush();

//   });

// });
