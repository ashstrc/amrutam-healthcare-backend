const authDocs = {
  "/auth/register": {
    post: {
      tags: ["Authentication"],
      summary: "Register a new user",
      description: "Creates a new user account and returns a JWT token.",
      security: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RegisterRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "User registered successfully",
        },
        400: {
          description: "Validation failed",
        },
      },
    },
  },

  "/auth/login": {
    post: {
      tags: ["Authentication"],
      summary: "Login user",
      description: "Authenticates a user and returns a JWT token.",
      security: [],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Login successful",
        },
        401: {
          description: "Invalid credentials",
        },
      },
    },
  },

  "/auth/profile": {
    get: {
      tags: ["Authentication"],
      summary: "Get logged in user profile",
      description: "Returns the authenticated user's profile.",
      responses: {
        200: {
          description: "Profile fetched successfully",
        },
        401: {
          description: "Unauthorized",
        },
      },
    },
  },

  "/auth/change-password": {
    patch: {
      tags: ["Authentication"],
      summary: "Change password",
      description: "Allows the authenticated user to change their password.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ChangePasswordRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Password changed successfully",
        },
        400: {
          description: "Validation failed",
        },
        401: {
          description: "Unauthorized",
        },
      },
    },
  },

  "/auth/doctor-only": {
    get: {
      tags: ["Authentication"],
      summary: "Doctor authorization test",
      description: "Accessible only by authenticated doctors.",
      responses: {
        200: {
          description: "Access granted",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Forbidden",
        },
      },
    },
  },
};

export default authDocs;
