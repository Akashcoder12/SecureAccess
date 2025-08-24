# 🔐 MERN Role-Based Authentication

A complete **role-based authentication and authorization system** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
This project demonstrates secure login, JWT authentication, role-based access control (RBAC), and protected routes for **User** and **Admin** dashboards.

## ✨ Features

### 🔑 Authentication
- Register new users with hashed passwords (bcrypt)  
- Login with JWT token generation  
- Logout (token invalidation on frontend)  
- Auto logout on token expiry  

### 🛡️ Authorization
- Role-based access control (RBAC): **User** and **Admin**  
- Protected routes for authenticated users  
- Admin-only dashboard with management features  
- Middleware to check role before accessing API routes  

### 🧩 General
- Responsive React UI (Tailwind)  
- REST API with Express & MongoDB  
- Secure token handling (httpOnly cookies or local storage)  
- Error handling & validation  

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite) + React Router
- Tailwind CSS
- Axios (API calls)
- Context API / Redux Toolkit for auth state

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT + Bcrypt
- CORS

---

## 📂 Project Structure

