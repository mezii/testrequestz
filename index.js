const express = require('express');
const app = express();

// Middleware to log all headers
app.use((req, res, next) => {
  console.log('Incoming Request Headers:', req.headers);
  next(); // Pass control to the next middleware or route handler
});

// A sample route
app.get('/', (req, res) => {
  res.send('Check your console for logged headers.');
});

// Start the server
const PORT = 9938;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});