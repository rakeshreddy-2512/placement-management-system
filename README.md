# Placement Management System

A modern full-stack campus recruitment platform that streamlines placement operations for students, companies, and placement administrators.

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Recharts
- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT-based authentication and role-based authorization

## Core Features

### Student Module
- Student registration/login and secure profile management
- Academic + resume-centric profile (CGPA, branch, backlogs, skills, resume link)
- Automatic eligibility-based job filtering
- One-click job applications for eligible drives

### Company Module
- Company registration/login and profile management
- Job posting with custom eligibility criteria
- Applications dashboard with candidate snapshots

### Admin Module
- Admin-only stats panel
- Platform metrics: total users, jobs, applications, selected students, placement rate

### Analytics
- Frontend placement analytics dashboard powered by charts
- Ready to connect with real analytics endpoints

## Monorepo Structure

```bash
placement-management-system/
├── client/  # React + Tailwind frontend
└── server/  # Express + MongoDB backend
```

## Getting Started

### 1) Clone and install dependencies

```bash
git clone <your-repo-url>
cd placement-management-system
cd server && npm install
cd ../client && npm install
```

### 2) Configure environment variables

Copy the example file and update values:

```bash
cd server
cp .env.example .env
```

`server/.env`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/placement_management
JWT_SECRET=supersecretkey
```

### 3) Run development servers

Backend:

```bash
cd server
npm run dev
```

Frontend:

```bash
cd client
npm run dev
```

## API Overview

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Student (role: `student`)
- `PUT /api/student/profile`
- `GET /api/student/jobs/eligible`
- `POST /api/student/jobs/:jobId/apply`

### Company (role: `company`)
- `PUT /api/company/profile`
- `POST /api/company/jobs`
- `GET /api/company/applications`

### Admin (role: `admin`)
- `GET /api/admin/stats`

## Production Notes

- Add centralized validation (Joi/Zod) and API error handlers
- Add pagination, search, and sorting for jobs/applications
- Add file uploads (S3/Cloudinary) for resumes
- Replace sample analytics data with DB-driven chart endpoints
- Add Docker + CI/CD pipeline for deployment

## License

MIT
