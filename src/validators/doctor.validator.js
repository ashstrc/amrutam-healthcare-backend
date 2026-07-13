import { body } from "express-validator";

export const createDoctorProfileValidator = [
  body("specialization").notEmpty().withMessage("Specialization is required"),

  body("licenseNumber")
    .trim()
    .notEmpty()
    .withMessage("License number is required"),

  body("yearsOfExperience")
    .isInt({ min: 0 })
    .withMessage("Years of experience must be a positive number"),

  body("consultationFee")
    .isFloat({ min: 0 })
    .withMessage("Consultation fee must be valid"),

  body("bio")
    .optional()
    .isLength({ max: 1000 })
    .withMessage("Bio cannot exceed 1000 characters"),
];

export const updateDoctorProfileValidator = [
  body("specialization")
    .optional()
    .notEmpty()
    .withMessage("Specialization cannot be empty"),

  body("yearsOfExperience")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Years of experience must be a positive number"),

  body("consultationFee")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Consultation fee must be valid"),

  body("bio")
    .optional()
    .isLength({ max: 1000 })
    .withMessage("Bio cannot exceed 1000 characters"),
];
