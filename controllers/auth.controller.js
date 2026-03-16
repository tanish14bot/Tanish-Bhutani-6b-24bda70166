import createError from "http-errors";
import { StatusCodes } from "http-status-codes";
import { User } from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export async function registerUser(req, res, next) {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.create({ fullName, email, password });
    res.status(StatusCodes.CREATED).json({
      message: "User registered successfully",
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return next(createError(StatusCodes.UNAUTHORIZED, "Invalid email or password"));
    }
    const token = generateToken(user._id.toString());
    res.json({
      message: "Login successful",
      data: {
        token,
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function getCurrentUser(req, res, next) {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return next(createError(StatusCodes.NOT_FOUND, "User not found"));
    }
    res.json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
}
