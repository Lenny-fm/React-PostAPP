const express = require('express');
const router = express.Router();

const authController = require('../controllers/authentificationController');

router.post('/signup', authController.register);

module.exports = router;
