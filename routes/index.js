const express = require('express');
const apiRouter = express.Router();
const { authMiddleware, facebookFutures } = require('./../middlewares/JWT_passport');
module.exports = async(logger) => {
    try {
        const { CONTROLLERS } = await require('./../app_init/dal_service_init')(logger);
        const userRouter      = require('./user')(CONTROLLERS.Users, authMiddleware, facebookFutures);
        const portalRouter    = require('./portal')(CONTROLLERS.Portals, authMiddleware);
        const nicknameRouter  = require('./nickname')(CONTROLLERS.Nicknames);
        const questionRouter  = require('./queston')(CONTROLLERS.Questions); 
        const answerRouter    = require('./answer')(CONTROLLERS.Answers);  
        apiRouter.use('/users', userRouter);
        apiRouter.use('/portals', portalRouter);
        apiRouter.use('/nicknames', nicknameRouter);
        apiRouter.use('/questions', questionRouter);
        apiRouter.use('/answers', answerRouter);
        return apiRouter
    } catch (error) {
        logger.error(error.message)
        logger.info(error.message)
    }
}