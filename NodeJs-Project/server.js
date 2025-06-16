const http = require('http');
const routes = require('./routes');
const { logRequest } = require('./utils/logger');

const PORT = 3000;

const server = http.createServer((req, res) => {
  logRequest(req);  // Log incoming request
  routes(req, res); // Route handler
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
