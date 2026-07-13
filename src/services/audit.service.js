import auditRepository from "../repositories/audit.repository.js";

class AuditService {
  async createLog({ userId, action, entity, entityId }) {
    return await auditRepository.createLog({
      userId,
      action,
      entity,
      entityId,
    });
  }

  async getAllLogs() {
    return await auditRepository.getAllLogs();
  }

  async getLogsByUser(userId) {
    return await auditRepository.getLogsByUser(userId);
  }
}

export default new AuditService();
