import eventBus from "../eventBus.js";
import { EVENTS } from "../eventTypes.js";

export const emitSlotCreated = (payload) => {
  eventBus.emit(EVENTS.SLOT_CREATED, payload);
};

export const emitSlotUpdated = (payload) => {
  eventBus.emit(EVENTS.SLOT_UPDATED, payload);
};

export const emitSlotDeleted = (payload) => {
  eventBus.emit(EVENTS.SLOT_DELETED, payload);
};
