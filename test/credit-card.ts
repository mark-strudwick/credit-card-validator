import chai from 'chai'
import chaiHttp from 'chai-http'

// import functions

const should = chai.should()

chai.use(chaiHttp)
describe('Integration Tests', () => {
  beforeEach((done) => {
    Card.remove({}, (err) => {
      done()
    })
  })

  describe('/POST credit card number', () => {
    it('it should POST a new credit card number and be valid', (done) => {

    })
  })
})

describe('Unit Tests', () => {

})
