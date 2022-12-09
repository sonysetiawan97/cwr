const NString = require('node-norm/schemas/nstring');
const NInteger = require('node-norm/schemas/ninteger');
const NDouble = require('node-norm/schemas/ndouble');
const Actorable = require('node-norm/observers/actorable');
const Timestampable = require('node-norm/observers/timestampable');

module.exports = {
  name: 'example',
  fields: [
    new NString('name'),
    new NString('nik'),
    new NString('tanggal_lahir'),
    new NString('email'),
    new NString('username'),
    new NString('password'),
    new NString('phone_number'),
    new NString('salt'),
    new NString('type'),
    new NString('given_name'),
    new NString('family_name'),
    new NInteger('status'),
    new NDouble('balance_user'),
  ],
  observers: [
    new Actorable(),
    new Timestampable(),

  ],
};
