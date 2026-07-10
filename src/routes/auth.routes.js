import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  registerValidator,
    loginValidator,
    changePasswordValidator,
} from "../validators/auth.validator.js";
import authorize from "../middleware/role.middleware.js";

import validate from "../middleware/validation.middleware.js";

const router = express.Router();

router.post("/register", registerValidator, validate, authController.register);
router.post("/login", loginValidator, validate, authController.login);

router.get("/profile", authMiddleware, authController.profile);

router.patch(
  "/change-password",
  authMiddleware,
  changePasswordValidator,
  validate,
  authController.changePassword,
);

router.get("/doctor-only", authMiddleware, authorize("DOCTOR"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Doctor",
  });
});

export default router;
