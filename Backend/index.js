const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// Environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, VuMeds Backend is running!');
});

// Set up the server to listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});