const router = require('express').Router();
const controller = require('../controllers/AuthController');
//might need to install a package
const middleware = require('../middleware');

router.post('/login', controller.Login);
router.post('/signup', controller.Signup);
router.post(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
);
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
);
module.exports = router;
