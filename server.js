const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS to allow requests from the React frontend
app.use(cors());

// Define a simple route that sends static data
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
