import express from 'express'

import { formatCardNumberLength, validateCardNumber } from './validate-card'

const router = express.Router()

router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const requestCardNumber:string = req.body.cardNumber
    const formatedCardNumber = formatCardNumberLength(requestCardNumber)
    if (!formatedCardNumber) {
      res.json({
        message: 'booooo'
      })
    }

    const isValid = validateCardNumber(formatedCardNumber)

    res.json({
      'isValid': isValid
    })
  } catch (error) {
    next(error)
  }
})

export default router