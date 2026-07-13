import adminRepository from "../repositories/admin.repository.js";

class AdminService {
  async getDashboard() {
    return await adminRepository.getDashboardStats();
  }
}

export default new AdminService();
