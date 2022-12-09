const NormStorage = require('@xinix/migrate/storages/norm');
const config = require('./config');

module.exports = {
  storage: new NormStorage(config),
};
