var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('Correct response', function(done) {
    request(app).get('/').expect('Hello Worms!', done);
  });
});

