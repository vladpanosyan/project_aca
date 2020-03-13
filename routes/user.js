const express = require('express');
const router  = express.Router();
const logger  = require('./../HELPERS/logger/ErrorLog');

module.exports = (userController, authMiddleware, facebookFuture) => {
  try {
    router.get('/profile/:id', authMiddleware, userController.getUsersById.bind(userController));
    router.post('/register', userController.createUser.bind(userController));
    router.post('/login', userController.userLogin.bind(userController));
    router.post('/auth/facebook', facebookFuture.facebookAuthCheck(), userController.facebookAuthCheck.bind(userController));
    router.post('/checkTokenValid', userController.checkTokenValid.bind(userController));
    router.post('/sendmail', userController.sendMail.bind(userController));
    router.put('/checkEmail', userController.checkEmail.bind(userController));
    return router; 

  } catch (error) {
      logger(`Connection Error "from -> userRouter", ${error.message}`)
  }
}
