import eventBus from "../eventBus.js";
import { EVENTS } from "../eventTypes.js";

export const emitConsultationCreated = (payload) => {
  eventBus.emit(EVENTS.CONSULTATION_CREATED, payload);
};

export const emitConsultationEnded = (payload) => {
  eventBus.emit(EVENTS.CONSULTATION_ENDED, payload);
};
