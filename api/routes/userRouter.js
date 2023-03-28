const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', userController.signUp);

router.post('/signin', userController.signIn);

router.get('/verify', authMiddleware, userController.verify);

module.exports = router;
