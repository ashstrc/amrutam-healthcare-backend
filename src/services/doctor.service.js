import doctorRepository from "../repositories/doctor.repository.js";
import {
  emitDoctorProfileCreated,
  emitDoctorProfileUpdated,
} from "../events/emitters/doctor.emitter.js";

class DoctorService {
  async createDoctorProfile(user, profileData) {
    // Only doctors can create a doctor profile
    if (user.role !== "DOCTOR") {
      throw new Error("Only doctors can create a doctor profile");
    }

    // Check if profile already exists
    const existingProfile = await doctorRepository.findDoctorByUserId(user.id);

    if (existingProfile) {
      throw new Error("Doctor profile already exists");
    }

    // Create profile
    const doctorProfile = await doctorRepository.createDoctorProfile({
      userId: user.id,
      specialization: profileData.specialization,
      licenseNumber: profileData.licenseNumber,
      yearsOfExperience: profileData.yearsOfExperience,
      consultationFee: profileData.consultationFee,
      bio: profileData.bio,
    });

    emitDoctorProfileCreated({
      userId: user.id,
      doctorId: doctorProfile.id,
    });

    return doctorProfile;
  }

  async getMyProfile(userId) {
    const profile = await doctorRepository.findDoctorByUserId(userId);

    if (!profile) {
      throw new Error("Doctor profile not found");
    }

    return profile;
  }

  async updateProfile(userId, profileData) {
    const doctor = await doctorRepository.findDoctorByUserId(userId);

    if (!doctor) {
      throw new Error("Doctor profile not found");
    }

    const updatedDoctor = await doctorRepository.updateDoctorProfile(userId, {
      specialization: profileData.specialization,
      yearsOfExperience: profileData.yearsOfExperience,
      consultationFee: profileData.consultationFee,
      bio: profileData.bio,
    });

    emitDoctorProfileUpdated({
      userId,
      doctorId: updatedDoctor.id,
    });

    return updatedDoctor;
  }

  async getAllDoctors() {
    return await doctorRepository.getAllDoctors();
  }

  async getDoctorById(id) {
    const doctor = await doctorRepository.findDoctorById(id);

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    return doctor;
  }

  async searchDoctors(filters) {
    return await doctorRepository.searchDoctors(filters);
  }
}

export default new DoctorService();
