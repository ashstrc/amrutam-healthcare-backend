import { body } from "express-validator";

export const createPrescriptionValidator = [
  body("consultationId").notEmpty().withMessage("Consultation ID is required"),

  body("instructions")
    .optional()
    .isLength({ max: 1000 })
    .withMessage("Instructions cannot exceed 1000 characters"),
];

export const updatePrescriptionValidator = [
  body("instructions").notEmpty().withMessage("Instructions are required"),
];

export const addMedicineValidator = [
  body("medicineName").notEmpty().withMessage("Medicine name is required"),

  body("dosage").notEmpty().withMessage("Dosage is required"),

  body("frequency").notEmpty().withMessage("Frequency is required"),

  body("duration").notEmpty().withMessage("Duration is required"),
];
