# 🧠 Project: LearnHub – Full Stack Educational Platform

You are to create a **full-stack web app** using **Vite (React + Tailwind)** for the frontend and **Node.js (Express + MongoDB)** for the backend.

---

## ⚙️ Stack Requirements

- **Frontend:**
  - React (Vite setup)
  - Tailwind CSS
  - React Router for routing
  - Axios for API calls
  - jsPDF (for generating certificates)
  - Clean, minimal, responsive UI

- **Backend:**
  - Node.js (Express)
  - MongoDB (local connection)
  - Mongoose for schema modeling
  - JWT for authentication
  - bcrypt for password hashing
  - dotenv for environment variables
  - CORS enabled for frontend communication

---

## 🧩 Features & Functionality

### 1. User Authentication
Two roles: **Admin** and **Student**

- **Admin:**
  - Login (no public signup)
  - Upload, edit, and delete courses
  - Manage video links, categories, and course details
- **Student:**
  - Signup & Login
  - Browse and enroll in courses
  - Watch course videos
  - Track progress (simple state tracking)
  - Generate completion certificate after finishing a course

Use **JWT** for authentication. Store tokens in localStorage.  
Passwords must be hashed using **bcrypt**.

---

### 2. Course Management
Each course contains:
- Title
- Description
- Category
- Thumbnail image
- Array of video URLs
- Duration (optional)
- CreatedBy (admin ID)

**Admin Dashboard:**
- Add Course form
- Manage Courses list (Edit/Delete)

**Student View:**
- Course Catalog (grid layout)
- Course Details page with video player (placeholder)
- “Mark Complete” button
- “Generate Certificate” button (when completed)

---

### 3. Certificate Generation
Use **jsPDF** to generate a PDF certificate with:
- Student name
- Course title
- Completion date
- “LearnHub” logo/title

Allow the student to download it as a file.

---

### 4. UI / UX Design Guidelines
- Use **Tailwind CSS**
- Aesthetic, modern layout (soft gradients, clean cards, rounded corners)
- Navbar with links:
  - Home | Courses | Dashboard | Login/Signup
- Landing Page Hero section:
  - Title: “Learn. Grow. Achieve.”
  - Subtitle: “Free short courses for everyone.”
- Dashboard layout:
  - Sidebar navigation (if possible)
  - Separate view for Admin and Student
- Responsive (mobile + desktop)
- Use Tailwind transitions and hover effects

---

### 5. Folder Structure

#### Frontend (Vite + React)
```
client/
 ├── src/
 │    ├── components/
 │    │    ├── Navbar.jsx
 │    │    ├── CourseCard.jsx
 │    │    └── VideoPlayer.jsx
 │    ├── pages/
 │    │    ├── Home.jsx
 │    │    ├── Courses.jsx
 │    │    ├── CourseDetail.jsx
 │    │    ├── Login.jsx
 │    │    ├── Signup.jsx
 │    │    ├── Dashboard/
 │    │    │     ├── StudentDashboard.jsx
 │    │    │     └── AdminDashboard.jsx
 │    ├── context/
 │    │    └── AuthContext.jsx
 │    ├── utils/
 │    │    └── api.js
 │    ├── App.jsx
 │    ├── main.jsx
 │    └── index.css
 ├── package.json
 └── vite.config.js
```

#### Backend (Node + Express)
```
server/
 ├── config/
 │    └── db.js
 ├── controllers/
 │    ├── authController.js
 │    ├── courseController.js
 │    └── certificateController.js
 ├── middleware/
 │    └── authMiddleware.js
 ├── models/
 │    ├── User.js
 │    ├── Course.js
 │    └── Certificate.js
 ├── routes/
 │    ├── authRoutes.js
 │    ├── courseRoutes.js
 │    └── certificateRoutes.js
 ├── server.js
 ├── package.json
 └── .env
```

---

### 6. API Endpoints

**Auth Routes**
```
POST /api/auth/register    → student signup
POST /api/auth/login       → login (admin/student)
GET  /api/auth/profile     → get user info
```

**Course Routes**
```
GET    /api/courses             → list all courses
GET    /api/courses/:id         → get course details
POST   /api/courses             → add course (admin only)
PUT    /api/courses/:id         → edit course (admin only)
DELETE /api/courses/:id         → delete course (admin only)
```

**Certificate Routes**
```
POST /api/certificates/generate → generate course completion certificate
```

Add **role-based access control middleware** to restrict admin routes.

---

### 7. Environment Variables (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/learnhub
JWT_SECRET=your_jwt_secret_key
```

---

### 8. Scripts

**Backend**
```bash
npm install express mongoose bcrypt jsonwebtoken dotenv cors nodemon
npm run dev
```

**Frontend**
```bash
npm install react-router-dom axios jspdf
npm run dev
```

---

### 9. Behavior & Notes
- Connect backend to local MongoDB instance (`mongodb://localhost:27017/learnhub`).
- Use `AuthContext` for managing logged-in user state.
- Protect routes (dashboard, etc.) via PrivateRoute components.
- Add placeholders for video uploads (actual upload logic will be added later).
- Certificates should save as PDFs with a styled design.
- Ensure CORS is properly configured.

---

### 10. Final Goal
Generate a fully functional **LearnHub prototype** with:
- Role-based auth (Admin/Student)
- Course management
- Certificate generation
- MongoDB backend
- Vite + React frontend
- Clean Tailwind UI
- Ready for local testing and later deployment to Vercel

Make the output **developer-friendly, well-commented, and aesthetic**.
