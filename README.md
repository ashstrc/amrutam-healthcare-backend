# 🩺 Amrutam Healthcare Backend API

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-5-black?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue?logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?logo=swagger)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

</p>

---

# 📌 Overview

**Amrutam Healthcare Backend API** is a production-ready RESTful backend for a Healthcare Appointment Management System built using **Node.js**, **Express.js**, **Prisma ORM**, **PostgreSQL**, and **Docker**.

The project follows a clean layered architecture consisting of **Controllers**, **Services**, **Repositories**, and **Prisma ORM**, making the codebase modular, scalable, and easy to maintain.

---

# ✨ Features

| Module | Status |
|---------|--------|
| JWT Authentication | ✅ |
| Role Based Authorization | ✅ |
| Doctor Profile Management | ✅ |
| Doctor Availability Slots | ✅ |
| Appointment Booking | ✅ |
| Consultation Management | ✅ |
| Prescription Management | ✅ |
| Medicine Management | ✅ |
| Payment Management | ✅ |
| Audit Logs | ✅ |
| Admin Dashboard Analytics | ✅ |
| Swagger API Documentation | ✅ |
| Docker Support | ✅ |
| PostgreSQL Database | ✅ |
| Prisma ORM | ✅ |

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | PostgreSQL |
| ORM | Prisma ORM |
| Authentication | JWT |
| Password Hashing | Bcrypt |
| Validation | Express Validator |
| Documentation | Swagger (OpenAPI) |
| Containerization | Docker & Docker Compose |
| API Testing | Postman |
| Language | JavaScript (ES Modules) |

---

# 🏗 System Architecture

```mermaid
flowchart TD

Client --> Express

Express --> Controllers

Controllers --> Services

Services --> Repositories

Repositories --> Prisma

Prisma --> PostgreSQL
```

---

# 📂 Project Structure

```text
amrutam-backend
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── docs/
│   ├── middleware/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── validators/
│   └── utils/
│
├── tests/
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.example
├── server.js
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/amrutam-backend.git

cd amrutam-backend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Generate Prisma Client

```bash
npx prisma generate
```

---

## 4️⃣ Run Database Migrations

```bash
npx prisma migrate deploy
```

---

## 5️⃣ Start Development Server

```bash
npm run dev
```

---

# 🐳 Docker

Build and start all services

```bash
docker compose up --build
```

Run in background

```bash
docker compose up -d
```

Stop containers

```bash
docker compose down
```

---

# ⚙ Environment Variables

Create a `.env` file.

```env
PORT=4000

DATABASE_URL=postgresql://postgres:password@localhost:5432/amrutam_db?schema=public

JWT_SECRET=your_jwt_secret
```

For Docker, use:

```env
DATABASE_URL=postgresql://postgres:password@postgres:5432/amrutam_db?schema=public
```

---

# 📘 API Documentation

Swagger UI

```
http://localhost:4000/api-docs
```

---

# 📚 API Modules

## Authentication

- Register
- Login
- Change Password
- Get Profile

## Doctor

- Create Profile
- Update Profile
- Get Profile
- Search Doctors
- Get Doctor Details

## Availability

- Create Slot
- Update Slot
- Delete Slot
- View Available Slots

## Appointment

- Book Appointment
- Cancel Appointment
- Doctor Appointments
- Update Appointment Status

## Consultation

- Create Consultation
- Update Consultation
- End Consultation

## Prescription

- Create Prescription
- Update Prescription
- Add Medicines

## Payment

- Create Payment
- Update Payment Status
- Patient Payment History

## Audit

- Get All Logs
- Get User Logs

## Admin

- Dashboard Analytics

---

# 🔐 User Roles

| Role | Permissions |
|------|-------------|
| ADMIN | Full System Access |
| DOCTOR | Manage Patients, Consultations & Prescriptions |
| PATIENT | Book Appointments & Payments |

---

# 🗄 Database

The application uses **PostgreSQL** together with **Prisma ORM**.

Current entities include:

- User
- DoctorProfile
- AvailabilitySlot
- Appointment
- Consultation
- Prescription
- Medicine
- Payment
- AuditLog

---

# 🧪 Testing

Currently supported

- Postman Collection ✅

Planned

- Jest
- Supertest
- Integration Testing
- API Coverage

---

# 🚀 Future Improvements

- Email Notifications
- SMS Notifications
- Video Consultation
- Payment Gateway Integration
- Medical Record Uploads
- Patient Reports
- Chat Between Doctor & Patient
- Appointment Reminder System
- CI/CD Pipeline
- GitHub Actions
- Automated Testing (Jest + Supertest)

---

# 👨‍💻 Author

**Ashmit Kumar**

Backend Developer

**Tech Stack**

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Docker

---

# 📄 License

This project is licensed under the **MIT License**.