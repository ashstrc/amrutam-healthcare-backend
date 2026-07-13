const auditDocs = {
  "/audit": {
    get: {
      tags: ["Audit"],
      summary: "Get All Audit Logs",
      description: "Returns all audit logs. Accessible only by administrators.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Audit logs retrieved successfully",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Admin access required",
        },
      },
    },
  },

  "/audit/{userId}": {
    get: {
      tags: ["Audit"],
      summary: "Get User Audit Logs",
      description:
        "Returns audit logs for a specific user. Accessible only by administrators.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: "path",
          name: "userId",
          required: true,
          description: "User ID",
          schema: {
            type: "string",
            example: "cmc4ab12cd34ef56gh78ij90",
          },
        },
      ],
      responses: {
        200: {
          description: "User audit logs retrieved successfully",
        },
        401: {
          description: "Unauthorized",
        },
        403: {
          description: "Admin access required",
        },
        404: {
          description: "User not found",
        },
      },
    },
  },
};

export default auditDocs;
