import doctorService from "../services/doctor.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class DoctorController {
  createProfile = asyncHandler(async (req, res) => {
    const profile = await doctorService.createDoctorProfile(req.user, req.body);

    res.status(201).json({
      success: true,
      message: "Doctor profile created successfully",
      data: profile,
    });
  });

  getMyProfile = asyncHandler(async (req, res) => {
    const profile = await doctorService.getMyProfile(req.user.id);

    res.status(200).json({
      success: true,
      message: "Doctor profile fetched successfully",
      data: profile,
    });
  });

  updateProfile = asyncHandler(async (req, res) => {
    const profile = await doctorService.updateProfile(req.user.id, req.body);

    res.status(200).json({
      success: true,
      message: "Doctor profile updated successfully",
      data: profile,
    });
  });

  getAllDoctors = asyncHandler(async (req, res) => {
    const doctors = await doctorService.getAllDoctors();

    res.status(200).json({
      success: true,
      message: "Doctors fetched successfully",
      data: doctors,
    });
  });

  getDoctorById = asyncHandler(async (req, res) => {
    const doctor = await doctorService.getDoctorById(req.params.id);

    res.status(200).json({
      success: true,
      data: doctor,
    });
  });

  searchDoctors = asyncHandler(async (req, res) => {
    const doctors = await doctorService.searchDoctors(req.query);

    res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });
  });
}

export default new DoctorController();
