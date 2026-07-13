import eventBus from "../eventBus.js";
import { EVENTS } from "../eventTypes.js";

export const emitDoctorProfileCreated = (payload) => {
  eventBus.emit(EVENTS.DOCTOR_PROFILE_CREATED, payload);
};

export const emitDoctorProfileUpdated = (payload) => {
  eventBus.emit(EVENTS.DOCTOR_PROFILE_UPDATED, payload);
};
