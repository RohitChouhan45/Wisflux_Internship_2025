# 🔐 JWT Authentication Project – Node.js

This project is built to demonstrate the core concepts of authentication using **JWT (JSON Web Tokens)** in **Node.js and Express**.  
It includes both a basic implementation (Day 1) and an extended production-like structure (Day 2).

---

## 📅 Work Timeline

### ✅ Day 1 – 25 June 2025: Basic JWT Authentication
- Created an Express.js server
- Implemented login route with hardcoded credentials
- Generated JWT token on successful login
- Secured a `/dashboard` route using token-based middleware
- Introduced concepts of stateless authentication using JWT

### ✅ Day 2 – 26 June 2025: Advanced Authentication System
- Added token **expiration** and a **refresh token mechanism**
- Introduced **logout** functionality to invalidate refresh tokens
- Defined **user roles** (admin/user) and role-based access control
- Added an admin-only route `/admin`
- Ensured secure access token generation, verification, and session handling

---

## 📁 Project Structure

```
jwt-auth-extended/
├── index.js           # Main server logic
├── package.json       # Node dependencies
├── .gitignore         # Node modules and env exclusion
└── README.md          # Project documentation
```

---

## 📦 Installation & Run

```bash
git clone <your-repo-url>
cd jwt-auth-extended
npm install
npm start
```

> Server runs on `http://localhost:3000`

---

## 🔁 API Endpoints

| Method | Endpoint      | Description                              |
|--------|---------------|------------------------------------------|
| POST   | `/login`      | Login with username & password           |
| POST   | `/token`      | Get a new access token from refresh token|
| POST   | `/logout`     | Invalidate refresh token (logout)        |
| GET    | `/dashboard`  | Protected user route                     |
| GET    | `/admin`      | Admin-only route (requires admin role)   |

---

## 🧪 Test Users

| Username | Password | Role  |
|----------|----------|-------|
| rohit    | 1234     | admin |
| ankita   | abcd     | user  |

Use tools like **Postman** or **Thunder Client** to test these routes with token headers.

---

## 🔐 Concepts Covered

- JWT Structure: Header, Payload, Signature
- Access vs Refresh Tokens
- Middleware-based Token Verification
- Role-based Authorization
- Token Expiry Handling
- Stateless Session Management

---

## 👨‍💻 Author

**Rohit Chouhan**  
Wisflux Internship  
25–26 June 2025
