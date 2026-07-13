import prisma from "../config/prisma.js";

class AvailabilityRepository {
  async createSlot(data) {
    return await prisma.availabilitySlot.create({
      data,
    });
  }

  async getSlotsByDoctorId(doctorId) {
    return await prisma.availabilitySlot.findMany({
      where: {
        doctorId,
      },
      orderBy: {
        date: "asc",
      },
    });
  }

  async getSlotById(id) {
    return await prisma.availabilitySlot.findUnique({
      where: {
        id,
      },
    });
  }

  async updateSlot(id, data) {
    return await prisma.availabilitySlot.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteSlot(id) {
    return await prisma.availabilitySlot.delete({
      where: {
        id,
      },
    });
  }

  async getAvailableSlots(doctorId) {
    return await prisma.availabilitySlot.findMany({
      where: {
        doctorId,
        status: "AVAILABLE",
      },
      orderBy: {
        date: "asc",
      },
    });
  }
}

export default new AvailabilityRepository();
