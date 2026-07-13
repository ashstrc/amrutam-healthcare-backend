import express from "express";

import prescriptionController from "../controllers/prescription.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import validate from "../middleware/validation.middleware.js";

import {
  createPrescriptionValidator,
  updatePrescriptionValidator,
  addMedicineValidator,
} from "../validators/prescription.validator.js";

const router = express.Router();

// Create Prescription
router.post(
  "/",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  createPrescriptionValidator,
  validate,
  prescriptionController.createPrescription,
);

// Get Prescription
router.get("/:id", authMiddleware, prescriptionController.getPrescription);

// Update Prescription
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  updatePrescriptionValidator,
  validate,
  prescriptionController.updatePrescription,
);

// Add Medicine
router.post(
  "/:id/medicines",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  addMedicineValidator,
  validate,
  prescriptionController.addMedicine,
);

export default router;
