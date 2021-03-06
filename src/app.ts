import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

import { notFound, errorHandler } from './middlewares'
import api from './api'
import { welcomeMessage } from './config/project'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    welcomeMessage,
  })
})

app.use('/api', api)

app.use(notFound)
app.use(errorHandler)

export default app
