const express = require('express');
const authenticateLoginController = require('../controller/login.Controller');
const userController = require('../controller/user.Controller');
const validateEmail = require('../middleware/validateEmail');
const validateLogin = require('../middleware/validateLogin');
const validateUser = require('../middleware/validateUser');
const validateJwt = require('../middleware/validateJwt');
const categoryController = require('../controller/category.Controller');
const validateName = require('../middleware/validateName');
const postController = require('../controller/blogPost.Controller');
const { validateUpdate } = require('../middleware/validateUpdate');

const router = express.Router();

router.post('/login', validateLogin, authenticateLoginController);
router.post('/user', validateUser, validateEmail, userController.createUserController);
router.get('/user', validateJwt, userController.getAllUsers);
router.get('/user/:id', validateJwt, userController.getUserByIdController);
router.post('/categories', validateJwt, validateName, categoryController.createCategoryController);
router.get('/categories', validateJwt, categoryController.getAllCategories);
router.get('/post', validateJwt, postController.getAll);
router.get('/post/:id', validateJwt, postController.getPostById);
router.put('/post/:id', validateJwt, validateUpdate, postController.updatePostById);

module.exports = router;