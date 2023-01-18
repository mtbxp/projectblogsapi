const express = require('express');
const loginController = require('../controller/login.controller');
const loginValidation = require('../middleware/loginValidation');

const router = express.Router();

router.post('/login', loginValidation, loginController);

module.exports = router;