import jwt from "jsonwebtoken";

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return secret;
}

export function generateToken(userId) {
  const secret = getJwtSecret();
  const expiresIn = process.env.JWT_EXPIRES_IN || "1d";
  return jwt.sign({ userId }, secret, { expiresIn });
}

export function verifyToken(token) {
  const secret = getJwtSecret();
  return jwt.verify(token, secret);
}
