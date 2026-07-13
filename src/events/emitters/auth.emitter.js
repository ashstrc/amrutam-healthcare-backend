import eventBus from "../eventBus.js";
import { EVENTS } from "../eventTypes.js";

export const emitUserRegistered = (payload) => {
  eventBus.emit(EVENTS.USER_REGISTERED, payload);
};

export const emitUserLoggedIn = (payload) => {
  eventBus.emit(EVENTS.USER_LOGGED_IN, payload);
};
