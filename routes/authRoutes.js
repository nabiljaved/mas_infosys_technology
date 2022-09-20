const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth, checkUser, protectedRoutes,redirectRoutes } = require('../middleware/authMiddleware');

const router = Router();

// router.get('/', redirectRoutes, authController.login_get);
// router.get('/signup', redirectRoutes,authController.signup_get);
// router.get('/login', redirectRoutes, authController.login_get);
router.get('/logout', authController.logout_get);
// router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/require-authentication', redirectRoutes,  (req, res) => res.render('login'))


module.exports = router;