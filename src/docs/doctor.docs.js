const doctorDocs = {
  "/doctors/profile": {
    post: {
      tags: ["Doctor"],
      summary: "Create Doctor Profile",
      description:
        "Creates a doctor profile for the authenticated doctor. A doctor can create only one profile.",
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
              $ref: "#/components/schemas/CreateDoctorProfileRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Doctor profile created successfully",
        },
        400: {
          description: "Validation failed",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Only doctors can create profiles",
        },
      },
    },

    get: {
      tags: ["Doctor"],
      summary: "Get My Doctor Profile",
      description: "Returns the authenticated doctor's profile.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Doctor profile fetched successfully",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Doctor profile not found",
        },
      },
    },

    put: {
      tags: ["Doctor"],
      summary: "Update Doctor Profile",
      description: "Updates the authenticated doctor's profile.",
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
              $ref: "#/components/schemas/UpdateDoctorProfileRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Doctor profile updated successfully",
        },
        400: {
          description: "Validation failed",
        },
        401: {
          description: "Unauthorized",
        },
        404: {
          description: "Doctor profile not found",
        },
      },
    },
  },

  "/doctors": {
    get: {
      tags: ["Doctor"],
      summary: "Get All Doctors",
      description: "Returns all registered doctor profiles.",
      responses: {
        200: {
          description: "Doctors fetched successfully",
        },
      },
    },
  },

  "/doctors/search": {
    get: {
      tags: ["Doctor"],
      summary: "Search Doctors",
      description: "Search doctors using specialization and consultation fee.",
      parameters: [
        {
          in: "query",
          name: "specialization",
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "minFee",
          schema: {
            type: "number",
          },
        },
        {
          in: "query",
          name: "maxFee",
          schema: {
            type: "number",
          },
        },
      ],
      responses: {
        200: {
          description: "Doctors fetched successfully",
        },
      },
    },
  },

  "/doctors/{id}": {
    get: {
      tags: ["Doctor"],
      summary: "Get Doctor By ID",
      description: "Returns doctor details by doctor profile ID.",
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
          description: "Doctor fetched successfully",
        },
        404: {
          description: "Doctor not found",
        },
      },
    },
  },
};

export default doctorDocs;
