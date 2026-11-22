import prisma from "../config/prisma.js";

class ConsultationRepository {
  async createConsultation(data) {
    return await prisma.consultation.create({
      data,
      include: {
        appointment: true,
      },
    });
  }

  async findConsultationById(id) {
    return await prisma.consultation.findUnique({
      where: {
        id,
      },
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
        prescription: {
          include: { medicines: true },
        },
      },
    });
  }

  async findByAppointmentId(appointmentId) {
    return await prisma.consultation.findUnique({
      where: {
        appointmentId,
      },
    });
  }

  async updateConsultation(id, data) {
    return await prisma.consultation.update({
      where: {
        id,
      },
      data,
    });
  }
}

export default new ConsultationRepository();
