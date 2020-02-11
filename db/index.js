module.exports = async() => {
        try {
            let model = {};
            let models = await require(`./mysql/models/sequelize`);
            model.sequelize = models
            return model;    
        } catch (error) {
            console.log(error.message, 9999999989)   // es errorner@ qcuma anmijapes modelneri mejic  + naev erb xaamp anjatvac a   
            throw new Error('WTF + connection Error  " from -> db/index"')
        }
    }