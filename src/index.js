// src/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const infoRoutes = require('./routes/info.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route to verify server is running
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/info', infoRoutes); // Verify this line exists

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Auth API is running' });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});