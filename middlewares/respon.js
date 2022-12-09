const log = require('debug')('middlewares:respon');

module.exports = ({ debug = false } = {}) => {
  function marshallErr (err) {
    const { message, status } = err;
    let field;
    if (err.field) {
      field = err.field.name;
    }
    const error = { message, field, status };
    if (debug) {
      error.stack = err.stack;
    }
    return error;
  }

  return async (ctx, next) => {
    try {
      await next();
      if (ctx.status >= 400) {
        const { status, message } = ctx;
        const respon = {
          app: 'PORTAMENTO',
          version: 1,
          api_version: 1,
          status: 'OK',
          //   collection: null,
          code: ctx.status,
          message: message,
          errors: { message, status },
          data: ctx.state.result,
          meta: null,
        };
        // ctx.body = ctx.body || { errors: [{ message, status }] };
        ctx.body = respon;
        ctx.status = status;
      } else if (ctx.state.result) {
        const respon = {
          app: 'PORTAMENTO',
          version: 1,
          api_version: 1,
          status: 'OK',
          //   collection: null,
          code: ctx.status,
          message: 'Data retrieved.',
          errors: [],
          data: ctx.state.result,
          meta: null,
        };
        ctx.body = respon;
      }
    } catch (err) {
      ctx.status = err.status = err.status || 500;
      ctx.lastError = err;

      if (ctx.status >= 500) {
        log(`Caught error with stack => ${err.stack}`);
      }

      let errors = [];
      if (err.children) {
        errors = err.children.map(childErr => marshallErr(childErr));
      } else {
        errors.push(marshallErr(err));
      }
      const respon = {
        app: 'PORTAMENTO',
        version: 1,
        api_version: 1,
        status: 'OK',
        // collection: null,
        code: ctx.status,
        message: errors[0].message,
        errors: errors,
        data: [],
        meta: null,
      };
      ctx.body = respon;
    }
  };
};
