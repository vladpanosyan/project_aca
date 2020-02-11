const ServiceFactory = require('./serviceFactory')

module.exports = class AbstractServiceFactory {
    constructor(DAL) {
        this.DAL = DAL
    }

    create() {
        return new ServiceFactory(this.DAL).create()
    }
}