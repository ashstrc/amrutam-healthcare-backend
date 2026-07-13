import prisma from "../config/prisma.js";

class AdminRepository {
  async getDashboardStats() {
    const [
      totalUsers,
      totalDoctors,
      totalPatients,
      totalAppointments,
      confirmedAppointments,
      completedAppointments,
      cancelledAppointments,
      totalConsultations,
      totalPrescriptions,
      totalPayments,
      revenue,
    ] = await Promise.all([
      prisma.user.count(),

      prisma.doctorProfile.count(),

      prisma.user.count({
        where: {
          role: "PATIENT",
        },
      }),

      prisma.appointment.count(),

      prisma.appointment.count({
        where: {
          status: "CONFIRMED",
        },
      }),

      prisma.appointment.count({
        where: {
          status: "COMPLETED",
        },
      }),

      prisma.appointment.count({
        where: {
          status: "CANCELLED",
        },
      }),

      prisma.consultation.count(),

      prisma.prescription.count(),

      prisma.payment.count(),

      prisma.payment.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          status: "COMPLETED",
        },
      }),
    ]);

    return {
      totalUsers,
      totalDoctors,
      totalPatients,
      totalAppointments,
      confirmedAppointments,
      completedAppointments,
      cancelledAppointments,
      totalConsultations,
      totalPrescriptions,
      totalPayments,
      totalRevenue: revenue._sum.amount ?? 0,
    };
  }
}

export default new AdminRepository();
