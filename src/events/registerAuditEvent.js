import auditService from "../services/audit.service.js";
import { registerListener } from "./registerListener.js";

export function registerAuditEvent(event, action, entity, getEntityId) {
  registerListener(event, async (payload) => {
    await auditService.createLog({
      userId: payload.userId,
      action,
      entity,
      entityId: getEntityId(payload),
    });
  });
}
