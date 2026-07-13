import express from "express";

import consultationController from "../controllers/consultation.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import validate from "../middleware/validation.middleware.js";

import {
  createConsultationValidator,
  updateConsultationValidator,
} from "../validators/consultation.validator.js";

const router = express.Router();

// Create consultation
router.post(
  "/",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  createConsultationValidator,
  validate,
  consultationController.createConsultation,
);

// Get consultation
router.get("/:id", authMiddleware, consultationController.getConsultation);

// Update consultation
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  updateConsultationValidator,
  validate,
  consultationController.updateConsultation,
);

// End consultation
router.patch(
  "/:id/end",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  consultationController.endConsultation,
);

export default router;
