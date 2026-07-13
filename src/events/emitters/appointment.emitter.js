import eventBus from "../eventBus.js";
import { EVENTS } from "../eventTypes.js";

export const emitAppointmentBooked = (payload) => {
  eventBus.emit(EVENTS.APPOINTMENT_BOOKED, payload);
};

export const emitAppointmentCancelled = (payload) => {
  eventBus.emit(EVENTS.APPOINTMENT_CANCELLED, payload);
};

export const emitAppointmentConfirmed = (payload) => {
  eventBus.emit(EVENTS.APPOINTMENT_CONFIRMED, payload);
};

export const emitAppointmentCompleted = (payload) => {
  eventBus.emit(EVENTS.APPOINTMENT_COMPLETED, payload);
};
