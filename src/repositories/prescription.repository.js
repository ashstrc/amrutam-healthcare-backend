import prisma from "../config/prisma.js";

class PrescriptionRepository {
  async createPrescription(data) {
    return await prisma.prescription.create({
      data,
      include: {
        consultation: true,
        medicines: true,
      },
    });
  }

  async findPrescriptionById(id) {
    return await prisma.prescription.findUnique({
      where: {
        id,
      },
      include: {
        consultation: {
          include: {
            appointment: {
              include: {
                patient: true,
                doctor: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
        medicines: true,
      },
    });
  }

  async findByConsultationId(consultationId) {
    return await prisma.prescription.findUnique({
      where: {
        consultationId,
      },
    });
  }

  async updatePrescription(id, data) {
    return await prisma.prescription.update({
      where: {
        id,
      },
      data,
    });
  }

  async addMedicine(data) {
    return await prisma.medicine.create({
      data,
    });
  }
}

export default new PrescriptionRepository();
