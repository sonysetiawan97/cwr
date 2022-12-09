const winston = require('winston');
const config = require('../config');

const options = {
  levels: {
    custom: 0,
    error: 1,
    data: 2,
    info: 3,
    warn: 2,
    verbose: 5,
    silly: 6,
    debug: 7,
  },
};
class Logger {
  constructor () {
    this.winston = winston.createLogger({
      levels: options.levels,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `${config.logpath}/info.log`,
          level: 'info',
          maxsize: '5m',
        }),
        new winston.transports.File({
          filename: `${config.logpath}/error.log`,
          level: 'error',
          maxsize: '5m',
        }),
        new winston.transports.File({
          filename: `${config.logpath}/data.log`,
          level: 'data',
          maxsize: '5m',
        }),
        new winston.transports.File({
          filename: `${config.logpath}/debug.log`,
          level: 'debug',
          maxsize: '5m',
        }),
      ],
    });
  }

  log (level, message) {
    if (process.env.DEBUG !== '*' && level === 'debug') {
      return;
    }
    this.winston.log({ level, message });
  }
}

module.exports = Logger;
