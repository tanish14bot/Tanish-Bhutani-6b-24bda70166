import { Router } from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/me", authMiddleware, getCurrentUser);
