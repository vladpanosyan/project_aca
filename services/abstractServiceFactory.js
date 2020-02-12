const ServiceFactory = require('./serviceFactory')

module.exports = class AbstractServiceFactory {
    constructor(DAL, logger) { 
        this.DAL = DAL;
        this.logger = logger;
    }

    create() {
        return new ServiceFactory(this.DAL, this.logger).create()
    }
}