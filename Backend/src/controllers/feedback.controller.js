const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const { name, email, phone, date, location, trees, comments, rating, participateAgain } = req.body;
    const photo = req.file ? req.file.filename : '';

    const feedback = new Feedback({
      name,
      email,
      phone,
      date,
      location,
      trees,
      comments,
      rating,
      participateAgain,
      photo,
    });

    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
