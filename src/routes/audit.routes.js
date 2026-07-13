import express from "express";

import auditController from "../controllers/audit.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

// Get all logs (Admin)
router.get(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN"),
  auditController.getAllLogs,
);

// Get logs of a specific user (Admin)
router.get(
  "/:userId",
  authMiddleware,
  roleMiddleware("ADMIN"),
  auditController.getLogsByUser,
);

export default router;
