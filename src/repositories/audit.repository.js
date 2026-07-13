import prisma from "../config/prisma.js";

class AuditRepository {
  async createLog(data) {
    return await prisma.auditLog.create({
      data,
    });
  }

  async getAllLogs() {
    return await prisma.auditLog.findMany({
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getLogsByUser(userId) {
    return await prisma.auditLog.findMany({
      where: {
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}

export default new AuditRepository();
