import prisma from "../config/prisma.js";

class AppointmentRepository {
  async createAppointment(data) {
    return await prisma.appointment.create({
      data,
      include: {
        patient: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        doctor: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },
          },
        },
        slot: true,
      },
    });
  }

  async findAppointmentById(id) {
    return await prisma.appointment.findUnique({
      where: {
        id,
      },
      include: {
        patient: true,
        doctor: {
          include: {
            user: true,
          },
        },
        slot: true,
        consultation: {
          include: {
            prescription: {
              include: { medicines: true },
            },
          },
        },
        payment: true,
      },
    });
  }

  async findAppointmentBySlotId(slotId) {
    return await prisma.appointment.findFirst({
      where: {
        slotId,
        status: {
          not: "CANCELLED",
        },
      },
    });
  }

  async getPatientAppointments(patientId) {
    return await prisma.appointment.findMany({
      where: {
        patientId,
      },
      include: {
        doctor: {
          include: {
            user: true,
          },
        },
        slot: true,
        consultation: {
          include: {
            prescription: {
              include: { medicines: true },
            },
          },
        },
        payment: true,
      },
      orderBy: {
        bookedAt: "desc",
      },
    });
  }

  async getDoctorAppointments(doctorId) {
    return await prisma.appointment.findMany({
      where: {
        doctorId,
      },
      include: {
        patient: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        slot: true,
        consultation: {
          include: {
            prescription: {
              include: { medicines: true },
            },
          },
        },
        payment: true,
      },
      orderBy: {
        bookedAt: "desc",
      },
    });
  }

  async updateAppointment(id, data) {
    return await prisma.appointment.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteAppointment(id) {
    return await prisma.appointment.delete({
      where: {
        id,
      },
    });
  }
}

export default new AppointmentRepository();
