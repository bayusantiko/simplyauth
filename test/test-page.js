var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../8020_simplyauth');
const { expect } = chai;

chai.use(chaiHttp);
describe('/GET token', () => {
    it('should list ALL token on /token GET', function(done) {
        chai.request(server)
          .get('/token')
          .end(function(err, res){
            expect(res).to.have.status(200);
            expect(res.body[0]).to.have.property("token")
            done();
          });
      });
      
});