const adminDocs = {
  "/admin/dashboard": {
    get: {
      tags: ["Admin"],
      summary: "Get Dashboard Analytics",
      description:
        "Returns overall analytics and statistics of the healthcare management system. Accessible only by administrators.",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Dashboard statistics retrieved successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Dashboard",
              },
            },
          },
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
};

export default adminDocs;
