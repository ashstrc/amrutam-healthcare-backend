import { body } from "express-validator";

export const bookAppointmentValidator = [
  body("doctorId").notEmpty().withMessage("Doctor ID is required"),

  body("slotId").notEmpty().withMessage("Slot ID is required"),

  body("reason")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Reason cannot exceed 500 characters"),
];

export const updateAppointmentStatusValidator = [
  body("status")
    .isIn(["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"])
    .withMessage("Invalid appointment status"),
];
