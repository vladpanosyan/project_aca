const Services = require('./index');

module.exports = class ServiceFactory {
    constructor(DAL, logger) { 
        this.DAL = DAL;
        this.logger = logger;
        this.services = {}
    }

    create() {
        for(let service in Services) {
            this.services[service] = new Services[service](this.DAL[service], this.logger)
        }
        return this.services
    }
}
