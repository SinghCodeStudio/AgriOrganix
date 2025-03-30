const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// FAQ ke liye hai ye
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Server Listening
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
