const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');

// endpoints of user routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;