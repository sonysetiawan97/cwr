module.exports = function (data = {}) {
  const config = require('../../config');
  const connection = Object.assign({}, config.connections[0], {
    adapter: require('node-norm/adapters/memory'),
    data,
  });

  return Object.assign({}, config, {
    connections: [connection],
  });
};
