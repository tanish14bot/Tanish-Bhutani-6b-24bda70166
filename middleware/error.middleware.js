export function errorMiddleware(err, req, res, next) {
  const status = err.statusCode || err.status || 500;
  const response = {
    success: false,
    message: err.message || "Internal Server Error",
  };
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }
  res.status(status).json(response);
}
