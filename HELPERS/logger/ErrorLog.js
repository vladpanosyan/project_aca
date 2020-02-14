const winston = require('winston');
require('winston-daily-rotate-file');
const options = require('./log_settings')
const errorLogConfig = {
    level: 'error',
    transports: [
        new winston.transports.DailyRotateFile(options.file),
        new winston.transports.Console({
            level: 'info'
        })
    ],
    format: winston.format.combine(
        winston.format.label({
            label: "ERROR"
        }),
        winston.format.timestamp(),
        winston.format.printf((info) => {
            return `${info.timestamp} - ${info.label}:[${info.level}]: ${info.message}`;
        })
    ),
};

module.exports = winston.createLogger(errorLogConfig);