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

const app = express();

app.use(cors());

// No body parser for json needed here since multer parses form-data

app.use('/api/feedback', feedbackRoutes);

module.exports = app;
