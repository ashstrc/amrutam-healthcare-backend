const consultationDocs = {
  "/consultations": {
    post: {
      tags: ["Consultation"],
      summary: "Create Consultation",
      description: "Starts a consultation for a confirmed appointment.",
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
              $ref: "#/components/schemas/CreateConsultationRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Consultation created successfully",
        },
        400: {
          description: "Validation failed",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Doctor access required",
        },
        404: {
          description: "Appointment not found",
        },
      },
    },
  },

  "/consultations/{id}": {
    get: {
      tags: ["Consultation"],
      summary: "Get Consultation",
      description: "Returns consultation details by consultation ID.",
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
          description: "Consultation fetched successfully",
        },
        404: {
          description: "Consultation not found",
        },
      },
    },

    put: {
      tags: ["Consultation"],
      summary: "Update Consultation",
      description: "Updates diagnosis and notes of an existing consultation.",
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
              $ref: "#/components/schemas/UpdateConsultationRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Consultation updated successfully",
        },
        400: {
          description: "Validation failed",
        },
        404: {
          description: "Consultation not found",
        },
      },
    },
  },

  "/consultations/{id}/end": {
    patch: {
      tags: ["Consultation"],
      summary: "End Consultation",
      description:
        "Marks the consultation as completed by setting the end time.",
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
          description: "Consultation ended successfully",
        },
        404: {
          description: "Consultation not found",
        },
      },
    },
  },
};

export default consultationDocs;
