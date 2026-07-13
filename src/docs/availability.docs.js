const availabilityDocs = {
  "/slots": {
    post: {
      tags: ["Availability"],
      summary: "Create Availability Slot",
      description:
        "Creates a new availability slot for the authenticated doctor.",
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
              $ref: "#/components/schemas/CreateSlotRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Slot created successfully",
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
      },
    },
  },

  "/slots/my-slots": {
    get: {
      tags: ["Availability"],
      summary: "Get My Slots",
      description: "Returns all slots belonging to the authenticated doctor.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Slots fetched successfully",
        },
        401: {
          description: "Unauthorized",
        },
      },
    },
  },

  "/slots/{id}": {
    put: {
      tags: ["Availability"],
      summary: "Update Slot",
      description: "Updates an existing availability slot.",
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
              $ref: "#/components/schemas/UpdateSlotRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Slot updated successfully",
        },
        404: {
          description: "Slot not found",
        },
      },
    },

    delete: {
      tags: ["Availability"],
      summary: "Delete Slot",
      description: "Deletes an availability slot.",
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
          description: "Slot deleted successfully",
        },
        404: {
          description: "Slot not found",
        },
      },
    },
  },

  "/slots/doctor/{doctorId}": {
    get: {
      tags: ["Availability"],
      summary: "Get Available Slots",
      description: "Returns all available slots for a specific doctor.",
      parameters: [
        {
          in: "path",
          name: "doctorId",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Available slots fetched successfully",
        },
        404: {
          description: "Doctor not found",
        },
      },
    },
  },
};

export default availabilityDocs;
