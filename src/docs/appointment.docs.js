const appointmentDocs = {
  "/appointments": {
    post: {
      tags: ["Appointment"],
      summary: "Book Appointment",
      description:
        "Allows a patient to book an appointment with a doctor using an available slot.",
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
              $ref: "#/components/schemas/BookAppointmentRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Appointment booked successfully",
        },
        400: {
          description: "Validation failed",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Only patients can book appointments",
        },
      },
    },
  },

  "/appointments/my": {
    get: {
      tags: ["Appointment"],
      summary: "Get My Appointments",
      description: "Returns all appointments of the authenticated patient.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Appointments fetched successfully",
        },
        401: {
          description: "Unauthorized",
        },
      },
    },
  },

  "/appointments/{id}": {
    delete: {
      tags: ["Appointment"],
      summary: "Cancel Appointment",
      description: "Allows the patient to cancel an existing appointment.",
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
          description: "Appointment cancelled successfully",
        },
        404: {
          description: "Appointment not found",
        },
      },
    },
  },

  "/appointments/doctor": {
    get: {
      tags: ["Appointment"],
      summary: "Get Doctor Appointments",
      description:
        "Returns all appointments assigned to the authenticated doctor.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Doctor appointments fetched successfully",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Doctor access required",
        },
      },
    },
  },

  "/appointments/{id}/status": {
    patch: {
      tags: ["Appointment"],
      summary: "Update Appointment Status",
      description: "Allows a doctor to confirm or complete an appointment.",
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
              $ref: "#/components/schemas/UpdateAppointmentStatusRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Appointment status updated successfully",
        },
        400: {
          description: "Validation failed",
        },
        404: {
          description: "Appointment not found",
        },
      },
    },
  },
};

export default appointmentDocs;
