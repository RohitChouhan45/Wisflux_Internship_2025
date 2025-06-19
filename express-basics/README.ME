
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

---

## Folder Structure

express-api/
│
├── controllers/             # Handles business logic
│   └── userController.js
├── routes/                  # API route definitions
│   └── userRoutes.js
├── middlewares/            # Custom middlewares (optional)
├── models/                 # Data structures or DB schemas (future)
├── public/                 # Static assets (if any)
├── .env                    # Environment variables (PORT, etc.)
├── .gitignore
├── package.json
├── README.md
└── server.js               # App entry point
---


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

## Express App Setup

### `server.js`

```js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Express.js RESTful API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

## CRUD Example: User Controller

### `controllers/userController.js`

```js
let users = [];

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: users.length + 1,
    name
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const { name } = req.body;
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = name;
  res.json(user);
};

exports.deleteUser = (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
};
```

---

## Route Configuration

### `routes/userRoutes.js`

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
```

---

## API Endpoints Summary

| Method | URL                | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/users`       | Get all users       |
| GET    | `/api/users/:id`   | Get user by ID      |
| POST   | `/api/users`       | Create new user     |
| PUT    | `/api/users/:id`   | Update existing user|
| DELETE | `/api/users/:id`   | Delete user         |

---

## Testing with Postman

1. Launch [Postman](https://www.postman.com/)
2. Make API calls:
   - `GET http://localhost:3000/api/users`
   - `POST http://localhost:3000/api/users` with body:
     ```json
     {
       "name": "John Doe"
     }
     ```
   - `PUT http://localhost:3000/api/users/1` with body:
     ```json
     {
       "name": "Jane Doe"
     }
     ```
   - `DELETE http://localhost:3000/api/users/1`

---

## Understanding `express.json()`

- `express.json()` is middleware that parses incoming requests with JSON payloads and makes the data available in `req.body`.

```js
app.use(express.json());
```

---

## Best Practices

- ✅ Use `.env` for environment variables
- ✅ Use routers to separate concerns
- ✅ Use controllers for business logic
- ✅ Validate incoming requests
- ✅ Handle errors gracefully
- ✅ Use `nodemon` for development auto-reloading
- ✅ Write modular and testable code

---

## Optional Enhancements

Install helpful libraries:

```bash
npm install cors helmet morgan dotenv
```

Use them in `server.js`:

```js
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
```

---

## 🔗 Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Postman API Tool](https://www.postman.com/)
- [RESTful API Tutorial](https://restfulapi.net/)
