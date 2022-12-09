const fs = require('fs');
const path = require('path');

if (!process.env.SECRET) {
  console.warn('Please define secret for app');
}

const NORM_ADAPTER = process.env.NORM_ADAPTER || 'disk';
const SECRET = process.env.SECRET || 'secret';
const LOG_PATH = process.env.LOG_PATH || `${process.cwd()}/log`;
const DATA_MEDIA = process.env.DATA_MEDIA || path.join(process.cwd(), '.tmp/data');
const DOCUMENTATION_BASE_URL = process.env.DOCUMENTATION_BASE_URL || 'http://localhost:3009/api';

const connection = {
  schemas: fs.readdirSync(path.join(__dirname, 'schemas')).map(file => {
    return require(`./schemas/${file}`);
  }),
};

switch (NORM_ADAPTER) {
  case 'mysql':
    connection.adapter = require('node-norm-mysql');
    connection.host = process.env.NORM_MYSQL_HOST;
    connection.user = process.env.NORM_MYSQL_USER;
    connection.password = process.env.NORM_MYSQL_PASSWORD;
    connection.database = process.env.NORM_MYSQL_DATABASE;
    break;
  case 'disk':
  default:
    connection.adapter = require('node-norm/adapters/disk');
    connection.file = `${process.env.NORM_DISK_DIR || path.join(__dirname, '.tmp')}/db.json`;
}

const config = {
  connections: [connection],
  secret: SECRET,
  logpath: LOG_PATH,
  dataMedia: DATA_MEDIA,
  documentationUrl: DOCUMENTATION_BASE_URL,

};

module.exports = config;
