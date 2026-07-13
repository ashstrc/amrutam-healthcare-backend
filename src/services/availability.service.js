import availabilityRepository from "../repositories/availability.repository.js";
import doctorRepository from "../repositories/doctor.repository.js";
import {
  emitSlotCreated,
  emitSlotUpdated,
  emitSlotDeleted,
} from "../events/emitters/availability.emitter.js";

class AvailabilityService {
  async createSlot(userId, slotData) {
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    const slot = await availabilityRepository.createSlot({
      doctorId: doctor.id,
      ...slotData,
    });

    emitSlotCreated({
      userId,
      slotId: slot.id,
    });

    return slot;
  }

  async getMySlots(userId) {
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    return await availabilityRepository.getSlotsByDoctorId(doctor.id);
  }

  async updateSlot(userId, slotId, data) {
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    const slot = await availabilityRepository.getSlotById(slotId);

    if (!slot) {
      throw new Error("Slot not found");
    }

    if (slot.doctorId !== doctor.id) {
      throw new Error("Unauthorized");
    }

    const updatedSlot = await availabilityRepository.updateSlot(slotId, data);

    emitSlotUpdated({
      userId,
      slotId: updatedSlot.id,
    });

    return updatedSlot;
  }

  async deleteSlot(userId, slotId) {
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    const slot = await availabilityRepository.getSlotById(slotId);

    if (!slot) {
      throw new Error("Slot not found");
    }

    if (slot.doctorId !== doctor.id) {
      throw new Error("Unauthorized");
    }

    await availabilityRepository.deleteSlot(slotId);
    emitSlotDeleted({
      userId,
      slotId,
    });

    return {
      message: "Slot deleted successfully",
    };
  }

  async getAvailableSlots(doctorId) {
    return await availabilityRepository.getAvailableSlots(doctorId);
  }
}

export default new AvailabilityService();
