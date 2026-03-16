import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { authRouter } from "./routes/auth.routes.js";
import { loggerMiddleware } from "./middleware/logger.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use("/users", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
