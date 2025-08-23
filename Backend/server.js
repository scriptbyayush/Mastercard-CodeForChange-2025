require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });
