class ApiError extends Error {
  constructor(
    statusCode,
    message = "Sonething wennt wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (this.stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
