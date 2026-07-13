import express from "express";

import appointmentController from "../controllers/appointment.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import validate from "../middleware/validation.middleware.js";

import {
  bookAppointmentValidator,
  updateAppointmentStatusValidator,
} from "../validators/appointment.validator.js";

const router = express.Router();

/* Patient */

router.post(
  "/",
  authMiddleware,
  roleMiddleware("PATIENT"),
  bookAppointmentValidator,
  validate,
  appointmentController.bookAppointment,
);

router.get(
  "/my",
  authMiddleware,
  roleMiddleware("PATIENT"),
  appointmentController.getMyAppointments,
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("PATIENT"),
  appointmentController.cancelAppointment,
);

/* Doctor */

router.get(
  "/doctor",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  appointmentController.getDoctorAppointments,
);

router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  updateAppointmentStatusValidator,
  validate,
  appointmentController.updateAppointmentStatus,
);

export default router;
