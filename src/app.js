import express from "express";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

// Global Error Handler (always last)
app.use(errorHandler);

export default app;
