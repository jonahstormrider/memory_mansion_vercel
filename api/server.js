const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// For Vercel serverless deployment
if (process.env.VERCEL) {
  // Export the Express app as a serverless function
  module.exports = app;
} else {
  // Start the server for local development
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Memory Mansion website is running on port ${PORT}`);
    console.log(`Access it at http://localhost:${PORT}`);
  });
}
