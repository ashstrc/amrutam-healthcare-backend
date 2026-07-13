import prisma from "../config/prisma.js";

import appointmentRepository from "../repositories/appointment.repository.js";
import doctorRepository from "../repositories/doctor.repository.js";
import availabilityRepository from "../repositories/availability.repository.js";
import {
  emitAppointmentBooked,
  emitAppointmentCancelled,
  emitAppointmentConfirmed,
  emitAppointmentCompleted,
} from "../events/emitters/appointment.emitter.js";

class AppointmentService {
  async bookAppointment(user, appointmentData) {
    // Only patients can book appointments
    if (user.role !== "PATIENT") {
      throw new Error("Only patients can book appointments");
    }

    // Check doctor
    const doctor = await doctorRepository.findDoctorById(
      appointmentData.doctorId,
    );

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    // Check slot
    const slot = await availabilityRepository.getSlotById(
      appointmentData.slotId,
    );
    console.log("Booking Slot:", slot);

    if (!slot) {
      throw new Error("Slot not found");
    }

    // Slot should belong to selected doctor
    if (slot.doctorId !== doctor.id) {
      throw new Error("Selected slot does not belong to this doctor");
    }

    // Slot should be available
    if (slot.status !== "AVAILABLE") {
      throw new Error("Slot is not available");
    }

    // Prevent double booking
    const existingAppointment =
      await appointmentRepository.findAppointmentBySlotId(
        appointmentData.slotId,
      );

    if (existingAppointment) {
      throw new Error("Slot already booked");
    }

    // Transaction
    const appointment = await prisma.$transaction(async (tx) => {
      const createdAppointment = await tx.appointment.create({
        data: {
          patientId: user.id,
          doctorId: doctor.id,
          slotId: appointmentData.slotId,
          reason: appointmentData.reason,
        },
      });

      await tx.availabilitySlot.update({
        where: {
          id: appointmentData.slotId,
        },
        data: {
          status: "BOOKED",
        },
      });

      return createdAppointment;
    });

    emitAppointmentBooked({
      userId: user.id,
      appointmentId: appointment.id,
    });

    return appointment;
  }

  async getMyAppointments(userId) {
    return await appointmentRepository.getPatientAppointments(userId);
  }

  async getDoctorAppointments(userId) {
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    return await appointmentRepository.getDoctorAppointments(doctor.id);
  }

  async cancelAppointment(userId, appointmentId) {
    const appointment =
      await appointmentRepository.findAppointmentById(appointmentId);

    if (!appointment) {
      throw new Error("Appointment not found");
    }

    if (appointment.patientId !== userId) {
      throw new Error("You can only cancel your own appointments");
    }

    if (appointment.status === "CANCELLED") {
      throw new Error("Appointment is already cancelled");
    }

    await prisma.$transaction(async (tx) => {
      const updatedAppointment = await tx.appointment.update({
        where: {
          id: appointmentId,
        },
        data: {
          status: "CANCELLED",
        },
      });

      console.log("✅ Appointment Updated:", updatedAppointment.status);

      const updatedSlot = await tx.availabilitySlot.update({
        where: {
          id: appointment.slotId,
        },
        data: {
          status: "AVAILABLE",
        },
      });

      console.log("✅ Slot Updated:", updatedSlot);
    });

    emitAppointmentCancelled({
      userId,
      appointmentId,
    });

    return {
      message: "Appointment cancelled successfully",
    };
  }

  async updateAppointmentStatus(userId, appointmentId, status) {
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    const appointment =
      await appointmentRepository.findAppointmentById(appointmentId);

    if (!appointment) {
      throw new Error("Appointment not found");
    }

    if (appointment.doctorId !== doctor.id) {
      throw new Error("You are not allowed to update this appointment");
    }

    const updatedAppointment = await appointmentRepository.updateAppointment(
      appointmentId,
      { status },
    );

    switch (status) {
      case "CONFIRMED":
        emitAppointmentConfirmed({
          userId,
          appointmentId: updatedAppointment.id,
        });
        break;

      case "COMPLETED":
        emitAppointmentCompleted({
          userId,
          appointmentId: updatedAppointment.id,
        });
        break;
    }

    return updatedAppointment;
  }
}

export default new AppointmentService();
