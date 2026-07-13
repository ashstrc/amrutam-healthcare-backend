import express from "express";
import availabilityController from "../controllers/availability.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";
import validate from "../middleware/validation.middleware.js";
import {
  createSlotValidator,
  updateSlotValidator,
} from "../validators/availability.validator.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  createSlotValidator,
  validate,
  availabilityController.createSlot,
);

router.get(
  "/my-slots",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  availabilityController.getMySlots,
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  updateSlotValidator,
  validate,
  availabilityController.updateSlot,
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("DOCTOR"),
  availabilityController.deleteSlot,
);

router.get("/doctor/:doctorId", availabilityController.getAvailableSlots);

export default router;
