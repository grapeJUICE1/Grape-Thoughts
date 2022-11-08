export default class AppError extends Error {
  isOperational: boolean
  path: string
  constructor(path: string, message: string) {
    super(message)
    this.isOperational = true
    this.path = path
  }
}
