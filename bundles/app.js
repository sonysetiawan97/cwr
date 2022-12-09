const NormBundle = require('bono-norm/bundle');
const mysql2 = require('mysql2/promise');
const csv = require('fast-csv');
const { PassThrough } = require('stream');

const OPERATORS = {
  eq: '=',
  gt: '>',
  lt: '<',
  gte: '>=',
  lte: '<=',
  like: 'like',
  in: 'in',
};

module.exports = class App extends NormBundle {
  constructor ({ schema }) {
    super({ schema });
    this.get('/null/export', this.export.bind(this));
    this.delete('/{id}/trash', this.trash.bind(this));
  }

  index (ctx, exp = false) {
    return this.runSession(async session => {
      const criteria = {};
      for (const key in ctx.query) {
        if (key[0] === '!') {
          continue;
        }
        criteria[key] = ctx.query[key];
      }

      if (this.filterBy) {
        Object.keys(this.filterBy).forEach(filterKey => {
          criteria[this.filterBy[filterKey]] = ctx.parameters[filterKey];
        });
      }

      if ('!search' in ctx.query && ctx.query['!search']) {
        const schema = require(`../schemas/${this.schema}`);
        for (let i = 0; i < schema.fields.length; i++) {
          if (schema.fields[i].name === '_created_by' || schema.fields[i].name === '_updated_by' || schema.fields[i].name === '_updated_time' || schema.fields[i].name === '_created_time' || schema.fields[i].name === '_deleted_time' || schema.fields[i].name === 'date_of_birth' || schema.fields[i].name === 'date_of_death' || schema.fields[i].name === 'passport_expired_date') {
            continue;
          }

          if (!criteria['!or']) {
            criteria['!or'] = [];
          }
          const key = schema.fields[i].name + '!like';
          const obj = {};
          obj[key] = ctx.query['!search'];
          criteria['!or'].push(obj);
        }
      }

      let query = session.factory(this.schema, criteria);

      if (!exp) {
        if ('!skip' in ctx.query) {
          query = query.skip(Number(ctx.query['!skip']));
        }
        if ('!limit' in ctx.query) {
          query = query.limit(Number(ctx.query['!limit']));
        }
      }

      if ('!sort' in ctx.query && ctx.query['!sort']) {
        query = query.sort(ctx.query['!sort']);
      }

      const entries = await query.all();
      const count = await session.factory(this.schema, criteria).count();
      return { entries, count };
    }, ctx);
  }

  async export (ctx) {
    const { entries } = await this.index(ctx, true);

    const stream = new PassThrough();
    csv.write(entries, { headers: true }).pipe(stream);
    ctx.set('Content-Disposition', `attachment; filename=${this.schema}_${new Date().toDateString().replace(' ', '_')}.csv`);
    ctx.body = stream;
  }

  getWhere (query) {
    const wheres = [];
    let data = [];
    for (const key in query.criteria) {
      let value = query.criteria[key];

      if (key === '!or') {
        const or = this.getOr(value);
        wheres.push(or.where);
        data = data.concat(or.data);
        continue;
      }

      const [field, operator = 'eq'] = key.split('!');

      // add by januar: for chek if operator like value change to %
      if (operator === 'like') {
        value = `%${value}%`;
      }
      if (operator === 'in' || operator === 'nin') {
        const token = new Array(value.length).fill('?').join(',');
        wheres.push(`${mysql2.escapeId(field)} ${OPERATORS[operator]} (${token})`);

        data = data.concat(value);
        continue;
      }
      data.push(value);
      wheres.push(`${mysql2.escapeId(field)} ${OPERATORS[operator]} ?`);
    }

    if (!wheres.length) {
      return [];
    }

    return [`WHERE ${wheres.join(' AND ')}`, data];
  }

  getOr (query) {
    const wheres = [];
    const data = [];
    for (let i = 0; i < query.length; i++) {
      const key = Object.keys(query[i])[0];
      let value = Object.values(query[i])[0];
      const [field, operator = 'eq'] = key.split('!');
      if (operator === 'like') {
        value = '%' + value + '%';
      }
      data.push(value);
      wheres.push(`${mysql2.escapeId(field)} ${OPERATORS[operator]} ?`);
    }
    return { where: `(${wheres.join(' OR ')})`, data };
  }

  trash (ctx) {
    return this.runSession(async session => {
      const entry = await this.read(ctx, session);
      if (!entry) {
        ctx.throw(404);
      }
      const filterData = {};
      if (this.filterBy) {
        Object.keys(this.filterBy).forEach(filterKey => {
          filterData[this.filterBy[filterKey]] = ctx.parameters[filterKey];
        });
      }
      await session.factory(this.schema, ctx.parameters.id).set({ _deleted_by: ctx.state.user.sub, _deleted_time: new Date(), status: 'inactive' }).save({ observer: false });
      return this.hideFields(entry);
    }, ctx);
  }
};
