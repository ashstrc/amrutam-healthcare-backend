import { body } from "express-validator";

export const createSlotValidator = [
  body("date").isISO8601().withMessage("Valid date is required"),

  body("startTime").isISO8601().withMessage("Valid start time is required"),

  body("endTime").isISO8601().withMessage("Valid end time is required"),
];

export const updateSlotValidator = [
  body("date").optional().isISO8601(),

  body("startTime").optional().isISO8601(),

  body("endTime").optional().isISO8601(),

  body("status").optional().isIn(["AVAILABLE", "BOOKED", "BLOCKED"]),
];
