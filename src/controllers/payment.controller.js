import paymentService from "../services/payment.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class PaymentController {
  createPayment = asyncHandler(async (req, res) => {
    const payment = await paymentService.createPayment(req.user.id, req.body);

    res.status(201).json({
      success: true,
      message: "Payment created successfully",
      data: payment,
    });
  });

  getPayment = asyncHandler(async (req, res) => {
    const payment = await paymentService.getPayment(req.params.id);

    res.status(200).json({
      success: true,
      data: payment,
    });
  });

  updatePaymentStatus = asyncHandler(async (req, res) => {
    const payment = await paymentService.updatePaymentStatus(
      req.params.id,
      req.body.status,
    );

    res.status(200).json({
      success: true,
      message: "Payment status updated successfully",
      data: payment,
    });
  });

  getMyPayments = asyncHandler(async (req, res) => {
    const payments = await paymentService.getMyPayments(req.user.id);

    res.status(200).json({
      success: true,
      data: payments,
    });
  });
}

export default new PaymentController();
