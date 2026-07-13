import consultationRepository from "../repositories/consultation.repository.js";
import appointmentRepository from "../repositories/appointment.repository.js";
import doctorRepository from "../repositories/doctor.repository.js";
import {
  emitConsultationCreated,
  emitConsultationEnded,
} from "../events/emitters/consultation.emitter.js";

class ConsultationService {
  async createConsultation(userId, consultationData) {
    // Find doctor profile
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    // Find appointment
    const appointment = await appointmentRepository.findAppointmentById(
      consultationData.appointmentId,
    );

    if (!appointment) {
      throw new Error("Appointment not found");
    }

    // Appointment must belong to doctor
    if (appointment.doctorId !== doctor.id) {
      throw new Error("You are not authorized to start this consultation");
    }

    // Appointment must be confirmed
    if (appointment.status !== "CONFIRMED") {
      throw new Error("Consultation can only start for confirmed appointments");
    }

    // Prevent duplicate consultation
    const existing = await consultationRepository.findByAppointmentId(
      consultationData.appointmentId,
    );

    if (existing) {
      throw new Error("Consultation already exists for this appointment");
    }

    const consultation = await consultationRepository.createConsultation({
      appointmentId: consultationData.appointmentId,
      diagnosis: consultationData.diagnosis,
      notes: consultationData.notes,
      startedAt: new Date(),
    });

    emitConsultationCreated({
      userId,
      consultationId: consultation.id,
    });

    return consultation;
  }

  async getConsultation(id) {
    const consultation = await consultationRepository.findConsultationById(id);

    if (!consultation) {
      throw new Error("Consultation not found");
    }

    return consultation;
  }

  async updateConsultation(id, data) {
    const consultation = await consultationRepository.findConsultationById(id);

    if (!consultation) {
      throw new Error("Consultation not found");
    }

    return await consultationRepository.updateConsultation(id, {
      diagnosis: data.diagnosis,
      notes: data.notes,
    });
  }

  async endConsultation(id) {
    const consultation = await consultationRepository.findConsultationById(id);

    if (!consultation) {
      throw new Error("Consultation not found");
    }

    const updatedConsultation = await consultationRepository.updateConsultation(
      id,
      {
        endedAt: new Date(),
      },
    );

    emitConsultationEnded({
      userId: consultation.appointment.doctor.userId,
      consultationId: consultation.id,
    });

    return updatedConsultation;
  }
}

export default new ConsultationService();
