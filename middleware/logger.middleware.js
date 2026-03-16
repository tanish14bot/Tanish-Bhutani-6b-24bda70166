import { sendToSolarWinds } from "../config/solarwinds.js";

export function loggerMiddleware(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    const logEntry = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${Date.now() - start}ms`,
      timestamp: new Date().toISOString(),
    };
    sendToSolarWinds(logEntry);
  });
  next();
}
