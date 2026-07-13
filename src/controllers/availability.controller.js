import availabilityService from "../services/availability.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class AvailabilityController {
  createSlot = asyncHandler(async (req, res) => {
    const slot = await availabilityService.createSlot(req.user.id, req.body);

    res.status(201).json({
      success: true,
      message: "Slot created successfully",
      data: slot,
    });
  });

  getMySlots = asyncHandler(async (req, res) => {
    const slots = await availabilityService.getMySlots(req.user.id);

    res.status(200).json({
      success: true,
      data: slots,
    });
  });

  updateSlot = asyncHandler(async (req, res) => {
    const slot = await availabilityService.updateSlot(
      req.user.id,
      req.params.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Slot updated successfully",
      data: slot,
    });
  });

  deleteSlot = asyncHandler(async (req, res) => {
    await availabilityService.deleteSlot(req.user.id, req.params.id);

    res.status(200).json({
      success: true,
      message: "Slot deleted successfully",
    });
  });

  getAvailableSlots = asyncHandler(async (req, res) => {
    const slots = await availabilityService.getAvailableSlots(
      req.params.doctorId,
    );

    res.status(200).json({
      success: true,
      data: slots,
    });
  });
}

export default new AvailabilityController();
