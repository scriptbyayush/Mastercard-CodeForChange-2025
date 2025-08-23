// const express = require("express");
// const path = require("path");
// const aiRoutes = require("./routes/ai.routes");
// const cors = require("cors");

// const app = express();

// // Enable CORS for all routes (allow all origins)
// app.use(cors());

// // Parse JSON request bodies (with size limit)
// app.use(express.json({ limit: "10mb" }));

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, "../public")));

// // Root endpoint to test server
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // API routes for AI features
// app.use("/ai", aiRoutes);

// // Export app for use in server.js
// module.exports = app;
const express = require('express');
const cors = require('cors');

const feedbackRoutes = require('./routes/feedback.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Enable CORS for all incoming requests
app.use(cors());

// JSON parser for request bodies (important for API endpoints expecting JSON)
app.use(express.json());

// If you expect form-data with files (multer handles this inside routes)
// No need to add bodyParser for multipart/form-data here globally

// Mount API routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api/auth', authRoutes);

// Global error handler skeleton (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
