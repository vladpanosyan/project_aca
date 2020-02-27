const AppError      = require('./../../../../HELPERS/ErrorHandling/AppError')
const fs            = require('fs');
const path          = require('path');
const { Sequelize } = require('sequelize')
const MYSQL         = require('./../../../../app_init/config').database.mysql;
const logger        = require('./../../../../HELPERS/logger/ErrorLog')
const DbError       = require('./../../../../HELPERS/ErrorHandling/DbError')
const sequelize     = new Sequelize(MYSQL.db_name, MYSQL.db_user, MYSQL.db_pass, {
    dialect: "mysql",
    host: MYSQL.db_host,
    port: MYSQL.db_port,
    //  timezone: '+00:00',
});

const basename  = path.basename(__filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    const name = model.name
    db[name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = sequelize
    .authenticate()
    .then(() => {
      logger.info('SEQUELIZE - Connection has been established successfully.');
        
    })
    .then(async () => {
      try {
        await sequelize.sync()
        logger.info('`Database & tables created!`')
        return 'db synced'
      } catch (error) {
        logger.error('tables not created , DB CONNECTION ERROR', error.message)
        throw new DbError('tables not created during syncronisation', error)
      }
    })
    .then(res => {
        global.UserModel = db.Users;
        global.sequelize = sequelize; 
        return db;
    })
    .catch(err => {
        logger.error('Unable to connect to the database:' + err.message);
        logger.info('Unable to connect to the database:' + err.message);
        throw new AppError('Connection error, check DB connection', err)
    })