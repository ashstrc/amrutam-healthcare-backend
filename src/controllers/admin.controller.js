import adminService from "../services/admin.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class AdminController {
  getDashboard = asyncHandler(async (req, res) => {
    const dashboard = await adminService.getDashboard();

    res.status(200).json({
      success: true,
      data: dashboard,
    });
  });
}

export default new AdminController();
