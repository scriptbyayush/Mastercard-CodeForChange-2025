const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // configure your upload folder

const feedbackController = require('../controllers/feedback.controller');

router.post('/', upload.single('photo'), feedbackController.createFeedback);

module.exports = router;
