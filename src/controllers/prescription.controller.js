import prescriptionService from "../services/prescription.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class PrescriptionController {
  createPrescription = asyncHandler(async (req, res) => {
    const prescription = await prescriptionService.createPrescription(
      req.user.id,
      req.body,
    );

    res.status(201).json({
      success: true,
      message: "Prescription created successfully",
      data: prescription,
    });
  });

  getPrescription = asyncHandler(async (req, res) => {
    const prescription = await prescriptionService.getPrescription(
      req.params.id,
    );

    res.status(200).json({
      success: true,
      data: prescription,
    });
  });

  updatePrescription = asyncHandler(async (req, res) => {
    const prescription = await prescriptionService.updatePrescription(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Prescription updated successfully",
      data: prescription,
    });
  });

  addMedicine = asyncHandler(async (req, res) => {
    const medicine = await prescriptionService.addMedicine(
      req.params.id,
      req.body,
    );

    res.status(201).json({
      success: true,
      message: "Medicine added successfully",
      data: medicine,
    });
  });
}

export default new PrescriptionController();
