function logRequest(req) {
  const now = new Date();
  console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);
}

module.exports = { logRequest };
