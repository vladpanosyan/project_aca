const Services = require('./index');

module.exports = class ServiceFactory {
    constructor(DAL) {
        this.DAL = DAL
        this.services = {}
    }

    create() {
        for(let service in Services) {
            this.services[service] = new Services[service](this.DAL[service])
        }
        return this.services
    }
}
