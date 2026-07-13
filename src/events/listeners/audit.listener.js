import { EVENTS } from "../eventTypes.js";
import { registerAuditEvent } from "../registerAuditEvent.js";

// =======================
// AUTH EVENTS
// =======================

registerAuditEvent(
  EVENTS.USER_REGISTERED,
  "REGISTER",
  "User",
  ({ userId }) => userId,
);

registerAuditEvent(
  EVENTS.USER_LOGGED_IN,
  "LOGIN",
  "User",
  ({ userId }) => userId,
);

// =======================
// APPOINTMENT EVENTS
// =======================

registerAuditEvent(
  EVENTS.APPOINTMENT_BOOKED,
  "BOOK_APPOINTMENT",
  "Appointment",
  ({ appointmentId }) => appointmentId,
);

registerAuditEvent(
  EVENTS.APPOINTMENT_CANCELLED,
  "CANCEL_APPOINTMENT",
  "Appointment",
  ({ appointmentId }) => appointmentId,
);

registerAuditEvent(
  EVENTS.APPOINTMENT_CONFIRMED,
  "CONFIRM_APPOINTMENT",
  "Appointment",
  ({ appointmentId }) => appointmentId,
);

registerAuditEvent(
  EVENTS.APPOINTMENT_COMPLETED,
  "COMPLETE_APPOINTMENT",
  "Appointment",
  ({ appointmentId }) => appointmentId,
);

// =======================
// SLOT EVENTS
// =======================

registerAuditEvent(
  EVENTS.SLOT_CREATED,
  "CREATE_SLOT",
  "AvailabilitySlot",
  ({ slotId }) => slotId,
);

registerAuditEvent(
  EVENTS.SLOT_UPDATED,
  "UPDATE_SLOT",
  "AvailabilitySlot",
  ({ slotId }) => slotId,
);

registerAuditEvent(
  EVENTS.SLOT_DELETED,
  "DELETE_SLOT",
  "AvailabilitySlot",
  ({ slotId }) => slotId,
);

// =======================
// DOCTOR EVENTS
// =======================

registerAuditEvent(
  EVENTS.DOCTOR_PROFILE_CREATED,
  "CREATE_DOCTOR_PROFILE",
  "DoctorProfile",
  ({ doctorId }) => doctorId,
);

registerAuditEvent(
  EVENTS.DOCTOR_PROFILE_UPDATED,
  "UPDATE_DOCTOR_PROFILE",
  "DoctorProfile",
  ({ doctorId }) => doctorId,
);

// =======================
// CONSULTATION EVENTS
// =======================

registerAuditEvent(
  EVENTS.CONSULTATION_CREATED,
  "CREATE_CONSULTATION",
  "Consultation",
  ({ consultationId }) => consultationId,
);

registerAuditEvent(
  EVENTS.CONSULTATION_ENDED,
  "END_CONSULTATION",
  "Consultation",
  ({ consultationId }) => consultationId,
);

// =======================
// PRESCRIPTION EVENTS
// =======================

registerAuditEvent(
  EVENTS.PRESCRIPTION_CREATED,
  "CREATE_PRESCRIPTION",
  "Prescription",
  ({ prescriptionId }) => prescriptionId,
);

registerAuditEvent(
  EVENTS.MEDICINE_ADDED,
  "ADD_MEDICINE",
  "Medicine",
  ({ medicineId }) => medicineId,
);

// =======================
// PAYMENT EVENTS
// =======================

registerAuditEvent(
  EVENTS.PAYMENT_CREATED,
  "CREATE_PAYMENT",
  "Payment",
  ({ paymentId }) => paymentId,
);

registerAuditEvent(
  EVENTS.PAYMENT_COMPLETED,
  "COMPLETE_PAYMENT",
  "Payment",
  ({ paymentId }) => paymentId,
);

registerAuditEvent(
  EVENTS.PAYMENT_FAILED,
  "FAIL_PAYMENT",
  "Payment",
  ({ paymentId }) => paymentId,
);

registerAuditEvent(
  EVENTS.PAYMENT_REFUNDED,
  "REFUND_PAYMENT",
  "Payment",
  ({ paymentId }) => paymentId,
);