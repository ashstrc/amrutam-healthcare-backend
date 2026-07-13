import { body } from "express-validator";

export const createConsultationValidator = [
  body("appointmentId").notEmpty().withMessage("Appointment ID is required"),

  body("diagnosis").notEmpty().withMessage("Diagnosis is required"),

  body("notes")
    .optional()
    .isLength({ max: 1000 })
    .withMessage("Notes cannot exceed 1000 characters"),
];

export const updateConsultationValidator = [
  body("diagnosis")
    .optional()
    .notEmpty()
    .withMessage("Diagnosis cannot be empty"),

  body("notes")
    .optional()
    .isLength({ max: 1000 })
    .withMessage("Notes cannot exceed 1000 characters"),
];
