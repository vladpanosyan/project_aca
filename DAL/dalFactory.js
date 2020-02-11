const sequelizeDal = require('./sequelize')

class DalFactory {
    constructor(models) {
        this.models = models
    }
    create() {
        const DALS = {}
        for (let model in this.models.sequelize) {
            DALS[model] = new sequelizeDal[model](this.models['sequelize'][model], this.models.sequelize)
        }
        return DALS;
    }
}
module.exports = DalFactory        
