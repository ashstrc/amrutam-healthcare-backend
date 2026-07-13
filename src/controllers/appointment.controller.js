import appointmentService from "../services/appointment.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class AppointmentController {
  bookAppointment = asyncHandler(async (req, res) => {
    const appointment = await appointmentService.bookAppointment(
      req.user,
      req.body,
    );

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: appointment,
    });
  });

  getMyAppointments = asyncHandler(async (req, res) => {
    const appointments = await appointmentService.getMyAppointments(
      req.user.id,
    );

    res.status(200).json({
      success: true,
      data: appointments,
    });
  });

  getDoctorAppointments = asyncHandler(async (req, res) => {
    const appointments = await appointmentService.getDoctorAppointments(
      req.user.id,
    );

    res.status(200).json({
      success: true,
      data: appointments,
    });
  });

  cancelAppointment = asyncHandler(async (req, res) => {
    const result = await appointmentService.cancelAppointment(
      req.user.id,
      req.params.id,
    );

    res.status(200).json({
      success: true,
      message: result.message,
    });
  });

  updateAppointmentStatus = asyncHandler(async (req, res) => {
    const appointment = await appointmentService.updateAppointmentStatus(
      req.user.id,
      req.params.id,
      req.body.status,
    );

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      data: appointment,
    });
  });
}

export default new AppointmentController();
