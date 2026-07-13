import paymentRepository from "../repositories/payment.repository.js";
import appointmentRepository from "../repositories/appointment.repository.js";
import {
  emitPaymentCreated,
  emitPaymentCompleted,
  emitPaymentFailed,
  emitPaymentRefunded,
} from "../events/emitters/payment.emitter.js";

class PaymentService {
  async createPayment(userId, data) {
    // Check appointment
    const appointment = await appointmentRepository.findAppointmentById(
      data.appointmentId,
    );

    if (!appointment) {
      throw new Error("Appointment not found");
    }

    // Only the patient can create payment
    if (appointment.patientId !== userId) {
      throw new Error("You are not allowed to pay for this appointment");
    }

    // Prevent duplicate payment
    const existing = await paymentRepository.findByAppointmentId(
      data.appointmentId,
    );

    if (existing) {
      throw new Error("Payment already exists for this appointment");
    }

    // Amount comes from doctor's consultation fee
    const payment = await paymentRepository.createPayment({
      appointmentId: data.appointmentId,
      amount: appointment.doctor.consultationFee,
    });

    emitPaymentCreated({
      userId,
      paymentId: payment.id,
    });

    return payment;
  }

  async getPayment(id) {
    const payment = await paymentRepository.findPaymentById(id);

    if (!payment) {
      throw new Error("Payment not found");
    }

    return payment;
  }

  async updatePaymentStatus(id, status) {
    const payment = await paymentRepository.findPaymentById(id);

    if (!payment) {
      throw new Error("Payment not found");
    }

    const updatedPayment = await paymentRepository.updatePayment(id, {
      status,
    });

    switch (status) {
      case "COMPLETED":
        emitPaymentCompleted({
          userId: payment.appointment.patientId,
          paymentId: updatedPayment.id,
        });
        break;

      case "FAILED":
        emitPaymentFailed({
          userId: payment.appointment.patientId,
          paymentId: updatedPayment.id,
        });
        break;

      case "REFUNDED":
        emitPaymentRefunded({
          userId: payment.appointment.patientId,
          paymentId: updatedPayment.id,
        });
        break;
    }

    return updatedPayment;
  }

  async getMyPayments(userId) {
    return await paymentRepository.getPatientPayments(userId);
  }
}

export default new PaymentService();
