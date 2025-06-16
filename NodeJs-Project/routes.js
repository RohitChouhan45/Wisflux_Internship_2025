const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to Node.js Server</h1>');
  
  } else if (req.url === '/api' && req.method === 'GET') {
    const data = {
      message: 'This is your Node.js API response',
      success: true,
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));

  } else if (req.url === '/file' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'data', 'message.txt');

    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(content);
      }
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
};
