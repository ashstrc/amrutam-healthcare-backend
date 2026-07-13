import eventBus from "../eventBus.js";
import { EVENTS } from "../eventTypes.js";

export const emitPrescriptionCreated = (payload) => {
  eventBus.emit(EVENTS.PRESCRIPTION_CREATED, payload);
};

export const emitMedicineAdded = (payload) => {
  eventBus.emit(EVENTS.MEDICINE_ADDED, payload);
};
