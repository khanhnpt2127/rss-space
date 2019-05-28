let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();



chai.use(chaiHttp);



describe('/', () => {
  it('it should return Hello World', (done) => {
     chai.request(server)
         .get('/')
         .end((err,res) => {
             res.should.have.status(200);
             done();
         });
  })
})
