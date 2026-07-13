import express from "express";

import doctorController from "../controllers/doctor.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import validate from "../middleware/validation.middleware.js";

import {
  createDoctorProfileValidator,
  updateDoctorProfileValidator,
} from "../validators/doctor.validator.js";

const router = express.Router();

router.post(
  "/profile",
  authMiddleware,
  authorize("DOCTOR"),
  createDoctorProfileValidator,
  validate,
  doctorController.createProfile,
);

router.get(
  "/profile",
  authMiddleware,
  authorize("DOCTOR"),
  doctorController.getMyProfile,
);

router.put(
  "/profile",
  authMiddleware,
  authorize("DOCTOR"),
  updateDoctorProfileValidator,
  validate,
  doctorController.updateProfile,
);

router.get("/", doctorController.getAllDoctors);

router.get("/search", doctorController.searchDoctors);

router.get("/:id", doctorController.getDoctorById);

export default router;
