import express from 'express'

const router = express.Router()

router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    
  } catch (error) {
    next(error)
  }
})

export default router