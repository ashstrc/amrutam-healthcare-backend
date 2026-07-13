import consultationService from "../services/consultation.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class ConsultationController {
  createConsultation = asyncHandler(async (req, res) => {
    const consultation = await consultationService.createConsultation(
      req.user.id,
      req.body,
    );

    res.status(201).json({
      success: true,
      message: "Consultation created successfully",
      data: consultation,
    });
  });

  getConsultation = asyncHandler(async (req, res) => {
    const consultation = await consultationService.getConsultation(
      req.params.id,
    );

    res.status(200).json({
      success: true,
      data: consultation,
    });
  });

  updateConsultation = asyncHandler(async (req, res) => {
    const consultation = await consultationService.updateConsultation(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Consultation updated successfully",
      data: consultation,
    });
  });

  endConsultation = asyncHandler(async (req, res) => {
    const consultation = await consultationService.endConsultation(
      req.params.id,
    );

    res.status(200).json({
      success: true,
      message: "Consultation ended successfully",
      data: consultation,
    });
  });
}

export default new ConsultationController();
