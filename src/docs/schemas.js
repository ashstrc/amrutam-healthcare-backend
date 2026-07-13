export const schemas = {
  User: {
    type: "object",
    properties: {
      id: {
        type: "string",
        example: "cmrf123456789",
      },
      fullName: {
        type: "string",
        example: "John Doe",
      },
      email: {
        type: "string",
        example: "john@example.com",
      },
      role: {
        type: "string",
        enum: ["PATIENT", "DOCTOR", "ADMIN"],
      },
      createdAt: {
        type: "string",
        format: "date-time",
      },
    },
  },

  DoctorProfile: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      specialization: {
        type: "string",
        example: "CARDIOLOGIST",
      },
      licenseNumber: {
        type: "string",
        example: "LIC123456",
      },
      yearsOfExperience: {
        type: "integer",
        example: 8,
      },
      consultationFee: {
        type: "number",
        example: 1200,
      },
      bio: {
        type: "string",
      },
    },
  },

  AvailabilitySlot: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      date: {
        type: "string",
        format: "date",
      },
      startTime: {
        type: "string",
        format: "date-time",
      },
      endTime: {
        type: "string",
        format: "date-time",
      },
      status: {
        type: "string",
        enum: ["AVAILABLE", "BOOKED", "BLOCKED"],
      },
    },
  },

  Appointment: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      reason: {
        type: "string",
      },
      status: {
        type: "string",
        enum: ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"],
      },
    },
  },

  Consultation: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      diagnosis: {
        type: "string",
      },
      notes: {
        type: "string",
      },
    },
  },

  Prescription: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      instructions: {
        type: "string",
      },
    },
  },

  Medicine: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      medicineName: {
        type: "string",
      },
      dosage: {
        type: "string",
      },
      frequency: {
        type: "string",
      },
      duration: {
        type: "string",
      },
    },
  },

  Payment: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      amount: {
        type: "number",
        example: 1200,
      },
      status: {
        type: "string",
        enum: ["PENDING", "COMPLETED", "FAILED", "REFUNDED"],
      },
    },
  },

  AuditLog: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      action: {
        type: "string",
      },
      entity: {
        type: "string",
      },
      entityId: {
        type: "string",
      },
      createdAt: {
        type: "string",
        format: "date-time",
      },
    },
  },

  Dashboard: {
    type: "object",
    properties: {
      totalUsers: {
        type: "integer",
      },
      totalDoctors: {
        type: "integer",
      },
      totalPatients: {
        type: "integer",
      },
      totalAppointments: {
        type: "integer",
      },
      confirmedAppointments: {
        type: "integer",
      },
      completedAppointments: {
        type: "integer",
      },
      cancelledAppointments: {
        type: "integer",
      },
      totalConsultations: {
        type: "integer",
      },
      totalPrescriptions: {
        type: "integer",
      },
      totalPayments: {
        type: "integer",
      },
      totalRevenue: {
        type: "number",
      },
    },
  },
  CreateDoctorProfileRequest: {
    type: "object",
    required: [
      "specialization",
      "licenseNumber",
      "yearsOfExperience",
      "consultationFee",
    ],
    properties: {
      specialization: {
        type: "string",
        example: "CARDIOLOGIST",
      },
      licenseNumber: {
        type: "string",
        example: "LIC123456",
      },
      yearsOfExperience: {
        type: "integer",
        example: 5,
      },
      consultationFee: {
        type: "number",
        example: 1000,
      },
      bio: {
        type: "string",
        example: "Experienced Cardiologist",
      },
    },
  },

  UpdateDoctorProfileRequest: {
    type: "object",
    properties: {
      specialization: {
        type: "string",
        example: "CARDIOLOGIST",
      },
      yearsOfExperience: {
        type: "integer",
        example: 6,
      },
      consultationFee: {
        type: "number",
        example: 1200,
      },
      bio: {
        type: "string",
        example: "Updated doctor profile",
      },
    },
  },
  RegisterRequest: {
    type: "object",
    required: ["fullName", "email", "password", "role"],
    properties: {
      fullName: {
        type: "string",
        example: "John Doe",
      },
      email: {
        type: "string",
        example: "john@example.com",
      },
      password: {
        type: "string",
        example: "Password@123",
      },
      role: {
        type: "string",
        enum: ["PATIENT", "DOCTOR", "ADMIN"],
        example: "PATIENT",
      },
    },
  },

  LoginRequest: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        example: "john@example.com",
      },
      password: {
        type: "string",
        example: "Password@123",
      },
    },
  },

  ChangePasswordRequest: {
    type: "object",
    required: ["oldPassword", "newPassword"],
    properties: {
      oldPassword: {
        type: "string",
        example: "Password@123",
      },
      newPassword: {
        type: "string",
        example: "NewPassword@123",
      },
    },
  },
  CreateSlotRequest: {
    type: "object",
    required: ["date", "startTime", "endTime"],
    properties: {
      date: {
        type: "string",
        format: "date",
        example: "2026-07-20",
      },
      startTime: {
        type: "string",
        format: "date-time",
        example: "2026-07-20T10:00:00Z",
      },
      endTime: {
        type: "string",
        format: "date-time",
        example: "2026-07-20T10:30:00Z",
      },
    },
  },

  UpdateSlotRequest: {
    type: "object",
    properties: {
      date: {
        type: "string",
        format: "date",
        example: "2026-07-21",
      },
      startTime: {
        type: "string",
        format: "date-time",
        example: "2026-07-21T11:00:00Z",
      },
      endTime: {
        type: "string",
        format: "date-time",
        example: "2026-07-21T11:30:00Z",
      },
      status: {
        type: "string",
        enum: ["AVAILABLE", "BOOKED", "BLOCKED"],
        example: "AVAILABLE",
      },
    },
  },
  BookAppointmentRequest: {
    type: "object",
    required: ["doctorId", "slotId"],
    properties: {
      doctorId: {
        type: "string",
        example: "cmdoctor123456",
      },
      slotId: {
        type: "string",
        example: "cmslot123456",
      },
      reason: {
        type: "string",
        example: "Severe headache for 3 days",
      },
    },
  },

  UpdateAppointmentStatusRequest: {
    type: "object",
    required: ["status"],
    properties: {
      status: {
        type: "string",
        enum: ["CONFIRMED", "COMPLETED"],
        example: "CONFIRMED",
      },
    },
  },
  CreateConsultationRequest: {
    type: "object",
    required: ["appointmentId", "diagnosis"],
    properties: {
      appointmentId: {
        type: "string",
        example: "cmappt123456",
      },
      diagnosis: {
        type: "string",
        example: "Viral Fever",
      },
      notes: {
        type: "string",
        example: "Patient advised complete bed rest for 5 days.",
      },
    },
  },

  UpdateConsultationRequest: {
    type: "object",
    properties: {
      diagnosis: {
        type: "string",
        example: "Migraine",
      },
      notes: {
        type: "string",
        example: "Updated treatment notes.",
      },
    },
  },
  CreatePrescriptionRequest: {
    type: "object",
    required: ["consultationId"],
    properties: {
      consultationId: {
        type: "string",
        example: "cmconsult123456",
      },
      instructions: {
        type: "string",
        example: "Take medicines after meals for 5 days.",
      },
    },
  },

  UpdatePrescriptionRequest: {
    type: "object",
    properties: {
      instructions: {
        type: "string",
        example: "Updated prescription instructions.",
      },
    },
  },

  AddMedicineRequest: {
    type: "object",
    required: ["medicineName", "dosage", "frequency", "duration"],
    properties: {
      medicineName: {
        type: "string",
        example: "Paracetamol 650mg",
      },
      dosage: {
        type: "string",
        example: "1 Tablet",
      },
      frequency: {
        type: "string",
        example: "Twice Daily",
      },
      duration: {
        type: "string",
        example: "5 Days",
      },
    },
  },
  CreatePaymentRequest: {
    type: "object",
    required: ["appointmentId"],
    properties: {
      appointmentId: {
        type: "string",
        example: "cmappt123456",
      },
    },
  },

  UpdatePaymentStatusRequest: {
    type: "object",
    required: ["status"],
    properties: {
      status: {
        type: "string",
        enum: ["COMPLETED", "FAILED", "REFUNDED"],
        example: "COMPLETED",
      },
    },
  },
  SuccessResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      message: {
        type: "string",
        example: "Operation completed successfully",
      },
    },
  },

  ErrorResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      message: {
        type: "string",
        example: "Something went wrong",
      },
    },
  },
  DashboardResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/Dashboard",
      },
    },
  },

  UserResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/User",
      },
    },
  },

  DoctorProfileResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/DoctorProfile",
      },
    },
  },

  AvailabilitySlotResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/AvailabilitySlot",
      },
    },
  },

  AppointmentResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/Appointment",
      },
    },
  },

  ConsultationResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/Consultation",
      },
    },
  },

  PrescriptionResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/Prescription",
      },
    },
  },

  PaymentResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        $ref: "#/components/schemas/Payment",
      },
    },
  },

  AuditLogResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      count: {
        type: "integer",
        example: 10,
      },
      data: {
        type: "array",
        items: {
          $ref: "#/components/schemas/AuditLog",
        },
      },
    },
  },
};

