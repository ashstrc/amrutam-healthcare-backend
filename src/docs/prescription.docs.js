const prescriptionDocs = {
  "/prescriptions": {
    post: {
      tags: ["Prescription"],
      summary: "Create Prescription",
      description: "Creates a prescription for a completed consultation.",
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
              $ref: "#/components/schemas/CreatePrescriptionRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Prescription created successfully",
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
          description: "Consultation not found",
        },
      },
    },
  },

  "/prescriptions/{id}": {
    get: {
      tags: ["Prescription"],
      summary: "Get Prescription",
      description: "Returns prescription details by ID.",
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
          description: "Prescription fetched successfully",
        },
        404: {
          description: "Prescription not found",
        },
      },
    },

    put: {
      tags: ["Prescription"],
      summary: "Update Prescription",
      description: "Updates prescription instructions.",
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
              $ref: "#/components/schemas/UpdatePrescriptionRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Prescription updated successfully",
        },
        404: {
          description: "Prescription not found",
        },
      },
    },
  },

  "/prescriptions/{id}/medicines": {
    post: {
      tags: ["Prescription"],
      summary: "Add Medicine",
      description: "Adds a medicine to an existing prescription.",
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
              $ref: "#/components/schemas/AddMedicineRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Medicine added successfully",
        },
        400: {
          description: "Validation failed",
        },
        404: {
          description: "Prescription not found",
        },
      },
    },
  },
};

export default prescriptionDocs;
