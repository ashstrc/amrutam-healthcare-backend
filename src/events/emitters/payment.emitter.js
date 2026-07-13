import eventBus from "../eventBus.js";
import { EVENTS } from "../eventTypes.js";

export const emitPaymentCreated = (payload) => {
  eventBus.emit(EVENTS.PAYMENT_CREATED, payload);
};

export const emitPaymentCompleted = (payload) => {
  eventBus.emit(EVENTS.PAYMENT_COMPLETED, payload);
};

export const emitPaymentFailed = (payload) => {
  eventBus.emit(EVENTS.PAYMENT_FAILED, payload);
};

export const emitPaymentRefunded = (payload) => {
  eventBus.emit(EVENTS.PAYMENT_REFUNDED, payload);
};
