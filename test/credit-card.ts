import * as chai from 'chai'
// import * as chaiHttp from 'chai-http'

// import functions
import { formatCardNumberLength, validateCardNumber } from '../src/api/card/validate-card'

// const should = chai.should()
const expect = chai.expect

describe('Unit Tests', () => {
  const validCardNumber = '4578 4230 1376 9219'
  const invalidCardNumber = '1111 2222'

  describe('Card validation tests', () => {
    it('should validate a credit card number to have a length of 16 digits and return a string with no spaces', (done) => {
      const formatted = formatCardNumberLength(validCardNumber)
      expect(formatted).to.have.string('4578423013769219')
      done()
    })

    it('should validate a card number using Luhn algorithm and return true', (done) => {
      const isValid = validateCardNumber(validCardNumber)
      expect(isValid).to.be.true
      done()
    })

    it('should invalidate the card number and return null', (done) => {
      const formatted = formatCardNumberLength(invalidCardNumber)
      expect(formatted).to.be.a('null')
      done()
    })

    it('should invalidate a card number using Luhn algorithm and return false', (done) => {
      const isValid = validateCardNumber(invalidCardNumber)
      expect(isValid).to.be.false
      done()
    })
  })
})

// chai.use(chaiHttp)
// describe('Integration Tests', () => {
//   beforeEach((done) => {
//     Card.remove({}, (err) => {
//       done()
//     })
//   })

//   describe('/POST credit card number', () => {
//     it('should POST a new credit card number and be valid', (done) => {

//     })
//   })
// })