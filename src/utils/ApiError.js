class ApiError extends Error {
  constructor(
    statusCode,
    message = "Sonething wennt wrong",
    errors = [],
    statck
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (this.statck) {
      this.statck = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
