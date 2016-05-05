supertest = require('supertest');
request = supertest('http://localhost:8080');

describe('Login Routes', function() {

  it('should fail when given a username that does not exist', function(done) {
    request.get('/login')
      .set('Accept', 'application/json')
      .set('username', 'Zimbabwe')
      .set('password', 'tiff')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        expect(res.body.success).toBe(false);
        done();
      });
  });

  it('should fail when not given a username', function(done) {
    request.get('/login')
      .set('Accept', 'application/json')
      .set('username', '')
      .set('password', 'tiff')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        expect(res.body.success).toBe(false);
        done();
      });
  });

  it('should fail when not given a password', function(done) {
    request.get('/login')
      .set('Accept', 'application/json')
      .set('username', 'tiff')
      .set('password', '')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        expect(res.body.success).toBe(false);
        done();
      });
  });

  it('should respond with a success given a correct username and password', function(done) {
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
