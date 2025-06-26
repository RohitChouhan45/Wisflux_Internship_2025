const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const SECRET_KEY = 'my_secret_key';
const REFRESH_SECRET = 'my_refresh_key';
let refreshTokens = [];

// Dummy users
const users = [
  { id: 1, username: 'rohit', password: '1234', role: 'admin' },
  { id: 2, username: 'ankita', password: 'abcd', role: 'user' }
];

// Generate Access Token
const generateAccessToken = (user) => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '1m' });
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(user, REFRESH_SECRET);
  refreshTokens.push(refreshToken);
  return refreshToken;
};

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).send('Invalid credentials');

  const payload = { username: user.username, role: user.role };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  res.json({ accessToken, refreshToken });
});

// Refresh token
app.post('/token', (req, res) => {
  const { token } = req.body;
  if (!token || !refreshTokens.includes(token)) return res.sendStatus(403);

  jwt.verify(token, REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ username: user.username, role: user.role });
    res.json({ accessToken });
  });
});

// Logout
app.post('/logout', (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter(t => t !== token);
  res.sendStatus(204);
});

// Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

const authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) return res.sendStatus(403);
  next();
};

// Protected Routes
app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username} to the dashboard!` });
});

app.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: `Hello Admin ${req.user.username}` });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
