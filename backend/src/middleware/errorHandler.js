import { ApiError } from '../utils/ApiError.js'

export function errorHandler(err, _req, res, _next) {
  const statusCode = err instanceof ApiError ? err.statusCode : 500
  const message = err instanceof ApiError ? err.message : 'Internal Server Error'

  if (process.env.NODE_ENV !== 'production') {
    console.error(err)
  }

  res.status(statusCode).json({
    success: false,
    message,
  })
}

export function notFoundHandler(_req, _res, next) {
  next(new ApiError(404, 'Route not found'))
}
