const createError = require('http-errors');
const express = require('express');
const path = require('path');
const { passport_strategy } = require('./middlewares/JWT_passport');
const logger = require('./HELPERS/logger/ErrorLog') 

const app = express();
passport_strategy(app);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public1')));

module.exports = (async (message) => {
  if (message) {
    app.get('/*', (req, res) => {
      res.render('error', {message})
    })
    return app;
  } else {
    const apiRouter = await require('./routes')(logger)
    app.use('/api', apiRouter);
    // app.get('/*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public1/index.html'))
    // })
    
    app.use(function (req, res, next) {
      next(createError(404));
    });
    // error handler
    app.use(function (err, req, res, next) {
      logger.error(`${err} -> error inside app.js`);
      logger.info(`${err.message} -> error inside app.js`);
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
      res.status(err.status || 500);
      res.render('error');
    });
    return app;
  }
})