// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Basic GET route
app.get('/', (req, res) => {
  res.send('Welcome to Express.js Basics!');
});

// Another GET route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// POST route
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Data received: Name - ${name}, Email - ${email}`);
});

// Middleware example (custom logger)
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url} | Method: ${req.method}`);
  next();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
