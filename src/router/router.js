const express = require('express');
const authenticateLoginController = require('../controller/login.Controller');
const userController = require('../controller/user.Controller');
const validateEmailAlready = require('../middleware/validateEmail');
const validateLogin = require('../middleware/validLogin');
const validateFieldsUser = require('../middleware/validateUser');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router.post('/login', validateLogin, authenticateLoginController);
router.post('/user', validateFieldsUser, validateEmailAlready, userController.createUserController);
router.get('/user', validateJWT, userController.getAllUsers);
router.get('/user/:id', validateJWT, userController.getUserByIdController);

module.exports = router;