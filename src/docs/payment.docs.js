const paymentDocs = {
  "/payments": {
    post: {
      tags: ["Payment"],
      summary: "Create Payment",
      description:
        "Creates a payment for an appointment. Only the appointment's patient can create a payment.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CreatePaymentRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Payment created successfully",
        },
        400: {
          description: "Validation failed",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Patient access required",
        },
        404: {
          description: "Appointment not found",
        },
      },
    },
  },

  "/payments/my-payments": {
    get: {
      tags: ["Payment"],
      summary: "Get My Payments",
      description: "Returns the payment history of the authenticated patient.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Payment history fetched successfully",
        },
        401: {
          description: "Unauthorized",
        },
      },
    },
  },

  "/payments/{id}": {
    get: {
      tags: ["Payment"],
      summary: "Get Payment",
      description: "Returns payment details by payment ID.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Payment fetched successfully",
        },
        404: {
          description: "Payment not found",
        },
      },
    },
  },

  "/payments/{id}/status": {
    patch: {
      tags: ["Payment"],
      summary: "Update Payment Status",
      description: "Allows a doctor or admin to update the payment status.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UpdatePaymentStatusRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Payment status updated successfully",
        },
        400: {
          description: "Validation failed",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Doctor or Admin access required",
        },
        404: {
          description: "Payment not found",
        },
      },
    },
  },
};

export default paymentDocs;
