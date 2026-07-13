export const EVENTS = {
  // Authentication
  USER_REGISTERED: "user.registered",
  USER_LOGGED_IN: "user.logged_in",

  // Doctor
  DOCTOR_PROFILE_CREATED: "doctor.profile.created",
  DOCTOR_PROFILE_UPDATED: "doctor.profile.updated",

  // Availability
  SLOT_CREATED: "availability.created",
  SLOT_UPDATED: "availability.updated",
  SLOT_DELETED: "availability.deleted",

  // Appointment
  APPOINTMENT_BOOKED: "appointment.booked",
  APPOINTMENT_CANCELLED: "appointment.cancelled",
  APPOINTMENT_CONFIRMED: "appointment.confirmed",
  APPOINTMENT_COMPLETED: "appointment.completed",

  // Consultation
  CONSULTATION_CREATED: "consultation.created",
  CONSULTATION_ENDED: "consultation.ended",

  // Prescription
  PRESCRIPTION_CREATED: "prescription.created",
  MEDICINE_ADDED: "medicine.added",

  // Payment
  PAYMENT_CREATED: "payment.created",
  PAYMENT_COMPLETED: "payment.completed",
  PAYMENT_FAILED: "payment.failed",
  PAYMENT_REFUNDED: "payment.refunded",
};
