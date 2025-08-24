const express = require('express');
const router = express.Router();
const { getActivityTrend } = require('../controllers/admindashboard.controller.js');

// GET /api/activity/trend?userId=xyz&range=daily
router.get('/trend', getActivityTrend);

module.exports = router;
