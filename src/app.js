import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import doctorRoutes from "./routes/doctor.routes.js";
import availabilityRoutes from "./routes/availability.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import consultationRoutes from "./routes/consultation.routes.js";
import prescriptionRoutes from "./routes/prescription.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import auditRoutes from "./routes/audit.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/slots", availabilityRoutes);
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/consultations", consultationRoutes);
app.use("/api/v1/prescriptions", prescriptionRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/audit", auditRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Global Error Handler (always last)
app.use(errorHandler);

export default app;
