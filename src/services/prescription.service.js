import prescriptionRepository from "../repositories/prescription.repository.js";
import consultationRepository from "../repositories/consultation.repository.js";
import doctorRepository from "../repositories/doctor.repository.js";
import {
  emitPrescriptionCreated,
  emitMedicineAdded,
} from "../events/emitters/prescription.emitter.js";

class PrescriptionService {
  async createPrescription(userId, data) {
    // Find doctor
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    // Find consultation
    const consultation = await consultationRepository.findConsultationById(
      data.consultationId,
    );

    if (!consultation) {
      throw new Error("Consultation not found");
    }

    // Verify doctor ownership
    if (consultation.appointment.doctorId !== doctor.id) {
      throw new Error("You are not authorized to create this prescription");
    }

    // Prevent duplicate prescription
    const existing = await prescriptionRepository.findByConsultationId(
      data.consultationId,
    );

    if (existing) {
      throw new Error("Prescription already exists for this consultation");
    }

    const prescription = await prescriptionRepository.createPrescription({
      consultationId: data.consultationId,
      instructions: data.instructions,
    });

    emitPrescriptionCreated({
      userId,
      prescriptionId: prescription.id,
    });

    return prescription;
  }

  async getPrescription(id) {
    const prescription = await prescriptionRepository.findPrescriptionById(id);

    if (!prescription) {
      throw new Error("Prescription not found");
    }

    return prescription;
  }

  async updatePrescription(id, data) {
    const prescription = await prescriptionRepository.findPrescriptionById(id);

    if (!prescription) {
      throw new Error("Prescription not found");
    }

    return await prescriptionRepository.updatePrescription(id, {
      instructions: data.instructions,
    });
  }

  async addMedicine(prescriptionId, medicineData) {
    const prescription =
      await prescriptionRepository.findPrescriptionById(prescriptionId);

    if (!prescription) {
      throw new Error("Prescription not found");
    }

    const medicine = await prescriptionRepository.addMedicine({
      prescriptionId,
      medicineName: medicineData.medicineName,
      dosage: medicineData.dosage,
      frequency: medicineData.frequency,
      duration: medicineData.duration,
    });

    emitMedicineAdded({
      userId: prescription.consultation.appointment.doctor.userId,
      medicineId: medicine.id,
    });

    return medicine;
  }
}

export default new PrescriptionService();
