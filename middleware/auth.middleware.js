import createError from "http-errors";
import { verifyToken } from "../utils/jwt.js";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(createError(401, "Unauthorized"));
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch {
    next(createError(401, "Invalid or expired token"));
  }
}
