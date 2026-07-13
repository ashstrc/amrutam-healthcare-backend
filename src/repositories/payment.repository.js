import prisma from "../config/prisma.js";

class PaymentRepository {
  async createPayment(data) {
    return await prisma.payment.create({
      data,
      include: {
        appointment: true,
      },
    });
  }

  async findPaymentById(id) {
    return await prisma.payment.findUnique({
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
      },
    });
  }

  async findByAppointmentId(appointmentId) {
    return await prisma.payment.findUnique({
      where: {
        appointmentId,
      },
    });
  }

  async updatePayment(id, data) {
    return await prisma.payment.update({
      where: {
        id,
      },
      data,
    });
  }

  async getPatientPayments(patientId) {
    return await prisma.payment.findMany({
      where: {
        appointment: {
          patientId,
        },
      },
      include: {
        appointment: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}

export default new PaymentRepository();
