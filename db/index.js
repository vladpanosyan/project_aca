const logger = require('./../HELPERS/logger/ErrorLog')
module.exports = async() => {
        try {
            let model = {};
            let models = await require(`./mysql/models/sequelize`);
            model.sequelize = models
            return model;    
        } catch (error) {
            if (error.name === 'dbError' || error.name === 'AppError') {
                logger.error(error.message)   
                logger.info(error.message)
            } else {
                throw error
            }
        }
    }