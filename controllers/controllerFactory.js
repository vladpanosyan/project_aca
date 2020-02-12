const Controllers = require('./index')// 

module.exports = class ControllerFctory {
    constructor(SERVICE, logger) {
        this.SERVICE = SERVICE;
        this.logger  = logger;
        this.controllers = {}
    }

    create() {
        for(let controller in Controllers) {
            this.controllers[controller] = new Controllers[controller](this.SERVICE[controller], this.logger)
        }
        return this.controllers
    }
}