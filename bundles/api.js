const Bundle = require('bono');
const AppBundle = require('./app.js');

module.exports = class Api extends Bundle {
  constructor ({ manager, secret, logger }) {
    super();

    this.manager = manager;
    this.logger = logger;
    this.secret = secret;

    this.use(require('kcors')());
    this.use(require('bono/middlewares/json')());
    this.use(require('koa-jwt')({ secret }));
    this.use(require('bono-norm/middleware')({ manager }));
    this.use(async (ctx, next) => {
      ctx.state.secret = secret;
      ctx.state.logger = this.logger;
      console.info('%s %s', ctx.method, ctx.url);
      await next();
    });
    
    this.bundle("/example", new AppBundle({ schema: "example" }));
    this.get("/", this.index.bind(this));
  }

  index () {
    const { name, version } = require('../package.json');
    return { name, version };
  }
};
