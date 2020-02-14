const appRoot = require('app-root-path');
const path = require('path')
const logDirectory = 'logs';
const fs = require('fs');
const errLoggerPath = path.join(__dirname, logDirectory, '%DATE%-logsDemo.log')

module.exports = {
    logDirectory,
    file: { 
        filename: `${errLoggerPath}`,
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        timestamp: true,
        json: true,
        maxsize: 5242880, 
        colorize: true,
    }
}