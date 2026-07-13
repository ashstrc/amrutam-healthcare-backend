import express from "express";

import paymentController from "../controllers/payment.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import validate from "../middleware/validation.middleware.js";

import {
  createPaymentValidator,
  updatePaymentStatusValidator,
} from "../validators/payment.validator.js";

const router = express.Router();

// Create Payment (Patient)
router.post(
  "/",
  authMiddleware,
  roleMiddleware("PATIENT"),
  createPaymentValidator,
  validate,
  paymentController.createPayment,
);


// Patient Payment History
router.get(
  "/my-payments",
  authMiddleware,
  roleMiddleware("PATIENT"),
  paymentController.getMyPayments,
);

// Get Payment
router.get("/:id", authMiddleware, paymentController.getPayment);

// Update Payment Status (Admin for now)
router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("DOCTOR", "ADMIN"),
  updatePaymentStatusValidator,
  validate,
  paymentController.updatePaymentStatus,
);



export default router;
