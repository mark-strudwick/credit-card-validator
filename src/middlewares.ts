const errorCodes = {
  ValidationError: 422,
  ViolationError: 409
}

export interface ErrorMessage {
  status: number
  message: string
  errors: string
}

export const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

export const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? errorCodes[errorName.name] || 500 : res.statusCode
  res.status(statusCode)
  const body: ErrorMessage = {
    status: statusCode,
    message: error.message,
    errors: error.errors || undefined,
  }
  res.json(body)
}
