import express from 'express'

const errorCodes = {
  ValidationError: 422,
  ViolationError: 409
}

export interface ErrorMessage {
  status: number
  message: string
  errors: string
}

export const notFound = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const error = new Error(`Not found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

export const errorHandler = (error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const statusCode = res.statusCode === 200 ? errorCodes[error.name as keyof Object] || 500 : res.statusCode
  res.status(statusCode)
  const body: ErrorMessage = {
    status: statusCode,
    message: error.message,
    errors: error.errors || undefined,
  }
  res.json(body)
}
