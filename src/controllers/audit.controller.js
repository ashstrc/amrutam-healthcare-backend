import auditService from "../services/audit.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class AuditController {
  getAllLogs = asyncHandler(async (req, res) => {
    const logs = await auditService.getAllLogs();

    res.status(200).json({
      success: true,
      count: logs.length,
      data: logs,
    });
  });

  getLogsByUser = asyncHandler(async (req, res) => {
    const logs = await auditService.getLogsByUser(req.params.userId);

    res.status(200).json({
      success: true,
      count: logs.length,
      data: logs,
    });
  });
}

export default new AuditController();
