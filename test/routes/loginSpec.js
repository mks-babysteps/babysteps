supertest = require('supertest');
request = supertest('http://localhost:8080');

describe('Login Routes', function() {
  it('should retrieve username and password for an existing user', function(done) {
    request.get('/login')
      .set('Accept', 'application/json')
      .set('username', 'tiff')
      .set('password', 'tiff')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        expect(res.body.success).toBe(true);
        done();
      });
  });
});




