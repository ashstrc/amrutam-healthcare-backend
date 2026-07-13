import swaggerUi from "swagger-ui-express";
import { schemas } from "../docs/schemas.js";
import paths from "../docs/index.js";

const swaggerSpec = {
  openapi: "3.0.0",

  info: {
    title: "Amrutam Healthcare API",
    version: "1.0.0",
    description: "REST API for the Amrutam Healthcare Management System",
  },

  servers: [
    {
      url: "http://localhost:4000/api/v1",
      description: "Development Server",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },

    schemas,
  },

  security: [
    {
      bearerAuth: [],
    },
  ],

  paths,
};

export { swaggerUi, swaggerSpec };
