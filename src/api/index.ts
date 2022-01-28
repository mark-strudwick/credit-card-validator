import express from 'express'

import { welcomeMessage } from '../config/project'
import card from './card/card-routes'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: welcomeMessage
  })
})

router.use('/card', card)

export default router
