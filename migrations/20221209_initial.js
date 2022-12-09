const { Manager } = require('node-norm');
const config = require('../config');
const DDL = require('norm-ddl');

module.exports = {
  async up() {
    const manager = new Manager(config);
    try {
      const ddl = new DDL(manager);
      ddl.putAdapter('mysql', require('norm-ddl-mysql'));
      await ddl.define('example');
    } finally {
      await manager.end();
    }
  },

  async down() {
    const manager = new Manager(config);
    try {
      const ddl = new DDL(manager);
      ddl.putAdapter('mysql', require('norm-ddl-mysql'));
      await ddl.undefine('example');
    } finally {
      await manager.end();
    }
  },
};
