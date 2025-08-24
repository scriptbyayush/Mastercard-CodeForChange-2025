const Feedback = require('../models/Feedback.js');

exports.getActivityTrend = async (req, res) => {
  try {
    const { userId, range } = req.query; // range = daily, weekly, monthly
    let groupStage;

    if (range === 'daily') {
      groupStage = { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 } };
    } else if (range === 'weekly') {
      groupStage = { _id: { year: { $year: "$createdAt" }, week: { $isoWeek: "$createdAt" } }, count: { $sum: 1 } };
    } else if (range === 'monthly') {
      groupStage = { _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, count: { $sum: 1 } };
    }

    const data = await Feedback.aggregate([
      { $match: { userId } },
      { $group: groupStage },
      { $sort: { "_id": 1 } }
    ]);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
