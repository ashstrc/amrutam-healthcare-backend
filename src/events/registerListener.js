import eventBus from "./eventBus.js";

export function registerListener(event, handler) {
  eventBus.on(event, async (payload) => {
    try {
      await handler(payload);
    } catch (error) {
      console.error(`[${event}] Listener Error:`, error.message);
    }
  });
}
