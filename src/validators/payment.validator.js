import { body } from "express-validator";

export const createPaymentValidator = [
  body("appointmentId").notEmpty().withMessage("Appointment ID is required"),
];

export const updatePaymentStatusValidator = [
  body("status")
    .isIn(["PENDING", "COMPLETED", "FAILED", "REFUNDED"])
    .withMessage("Invalid payment status"),
];
