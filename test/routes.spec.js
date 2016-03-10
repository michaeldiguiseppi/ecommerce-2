var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');

var should = chai.should();

chai.use(chaiHttp);


describe('testing API routes', function() {
    it('should get the index page', function(done) {
        chai.request(server)
        .get('/')
        .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.html;
            res.text.should.have.string('<title>index</title>');
            res.text.should.have.string('<h2 class = "center-block">Featured Shirts</h2>');
            done();
        });
    });
});