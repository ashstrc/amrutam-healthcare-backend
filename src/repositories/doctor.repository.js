import prisma from "../config/prisma.js";

class DoctorRepository {
  async createDoctorProfile(data) {
    return await prisma.doctorProfile.create({
      data,
    });
  }

  async findDoctorByUserId(userId) {
    return await prisma.doctorProfile.findUnique({
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
            isActive: true,
          },
        },
      },
    });
  }

  async findDoctorById(id) {
    return await prisma.doctorProfile.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            role: true,
            isActive: true,
          },
        },
      },
    });
  }

  async updateDoctorProfile(userId, data) {
    return await prisma.doctorProfile.update({
      where: {
        userId,
      },
      data,
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            role: true,
            isActive: true,
          },
        },
      },
    });
  }

  async getAllDoctors() {
    return await prisma.doctorProfile.findMany({
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async searchDoctors(filters) {
    const where = {};

    if (filters.specialization) {
      where.specialization = filters.specialization;
    }

    if (filters.experience) {
      where.yearsOfExperience = {
        gte: Number(filters.experience),
      };
    }

    if (filters.minFee || filters.maxFee) {
      where.consultationFee = {};

      if (filters.minFee) {
        where.consultationFee.gte = Number(filters.minFee);
      }

      if (filters.maxFee) {
        where.consultationFee.lte = Number(filters.maxFee);
      }
    }

    if (filters.name) {
      where.user = {
        fullName: {
          contains: filters.name,
          mode: "insensitive",
        },
      };
    }

    return await prisma.doctorProfile.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
      orderBy: {
        yearsOfExperience: "desc",
      },
    });
  }
}

export default new DoctorRepository();
