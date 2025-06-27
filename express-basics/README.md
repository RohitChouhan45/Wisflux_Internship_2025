
# Express.js RESTful API –


## Overview

**Express.js** is a lightweight and flexible web framework for Node.js used to build fast and scalable backend applications and APIs. It supports robust routing, middleware integration, JSON parsing, and more.

In this project, we will:
- Learn RESTful API principles
- Implement CRUD operations
- Build a complete Express.js application
- Test API endpoints using Postman
- Organize code using routers and controllers

---

## Topics Covered

1. ✅ Introduction to RESTful APIs
2. ✅ Understanding CRUD operations (Create, Read, Update, Delete)
3. ✅ Building a Simple REST API using Express.js
4. ✅ Handling JSON Data with `express.json()`
5. ✅ Structuring Express App using Routers and Controllers
6. ✅ Testing API Endpoints using Postman

---

## Learning Objectives

- Understand **RESTful API design principles**
- Implement **CRUD operations** using Express routes
- Handle HTTP methods: `GET`, `POST`, `PUT`, `DELETE`
- Use middleware like `express.json()` to handle JSON requests
- Organize codebase using **modular and scalable architecture**
- Perform hands-on testing using **Postman**

---

## Technologies Used

- **Node.js**
- **Express.js**
- **Postman** (for testing)
- Optional: `nodemon` for development


##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/express-api.git
cd express-api
```

### 2. Initialize and Install Dependencies

```bash
npm init -y
npm install express
npm install --save-dev nodemon
```

### 3. Create `.env` File

PORT=3000

---

## Start the Server

### For Development

```bash
npx nodemon server.js
```

### For Production

```bash
node server.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## What is RESTful API?

A **RESTful API** is an architectural style for building web services that use HTTP methods to access and manipulate data. It is based on **resources** identified by **URLs**, and uses standard methods like:

| HTTP Method | Action   | Description             |
|-------------|----------|-------------------------|
| `GET`       | Read     | Retrieve data           |
| `POST`      | Create   | Add new data            |
| `PUT`       | Update   | Modify existing data    |
| `DELETE`    | Delete   | Remove existing data    |

---


## 🔗 Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Postman API Tool](https://www.postman.com/)
- [RESTful API Tutorial](https://restfulapi.net/)
