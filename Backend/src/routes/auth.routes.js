const express = require('express');
const router = express.Router();

// Import the controller functions
const authController = require('../controllers/auth.controller');

// Use the imported controller functions as handlers
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
