import authDocs from "./auth.docs.js";
import doctorDocs from "./doctor.docs.js";
import availabilityDocs from "./availability.docs.js";
import appointmentDocs from "./appointment.docs.js";
import consultationDocs from "./consultation.docs.js";
import prescriptionDocs from "./prescription.docs.js";
import paymentDocs from "./payment.docs.js";
import auditDocs from "./audit.docs.js";
import adminDocs from "./admin.docs.js";

const paths = {
  ...authDocs,
  ...doctorDocs,
  ...availabilityDocs,
  ...appointmentDocs,
  ...consultationDocs,
  ...prescriptionDocs,
  ...paymentDocs,
  ...auditDocs,
  ...adminDocs,
};

export default paths;
