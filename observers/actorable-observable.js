const NString = require('node-norm/schemas/nstring');

class Actorable {
  constructor ({
    createdKey = '_created_by',
    updatedKey = '_updated_by',
    userCallback = ctx => {
      const { user } = ctx.query.session.state;
      if (user) {
        return user.sub;
      }
    },
  } = {}) {
    this.createdKey = createdKey;
    this.updatedKey = updatedKey;
    this.userCallback = userCallback;
  }

  initialize (schema) {
    schema.addField(new NString(this.createdKey));
    schema.addField(new NString(this.updatedKey));
  }

  async insert (ctx, next) {
    const { query } = ctx;
    query.rows.forEach(row => {
      row[this.createdKey] = row[this.updatedKey] = this.userCallback(ctx) || null;
    });

    await next();
  }

  async update (ctx, next) {
    const { query } = ctx;
    query.sets[this.updatedKey] = this.userCallback(ctx) || null;

    await next();
  }
}

// eslint-disable
if (typeof window !== 'undefined') {
  const norm = window.norm;
  if (!norm) {
    throw new Error('Norm is not defined yet!');
  }

  norm.observers = norm.observers || {};
  norm.observers.Actorable = Actorable;
}
// eslint-enable

module.exports = Actorable;
