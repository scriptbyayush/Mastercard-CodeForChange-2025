const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  location: String,
  trees: Number,
  comments: String,
  rating: Number,
  participateAgain: String,
  photo: String,
});

module.exports = mongoose.model('Feedback', feedbackSchema);
