const Bundle = require('bono');
const Api = require('./bundles/api');
const UploadData = require('./bundles/upload-data');
const Export = require('./bundles/export');
const FileBundle = require('bono-file');

const { Manager } = require('node-norm');
// const Excel = require('./bundles/export');

class App extends Bundle {
  constructor ({ connections, secret, dataMedia, logger }) {
    super();

    const manager = new Manager({ connections });

    this.use(require('kcors')());
    this.bundle('/media', new FileBundle({ dataMedia }));
    this.bundle('/api', new Api({ manager, secret, logger }));
    this.bundle('/upload_data', new UploadData({ manager, secret, logger }));
    this.bundle('/export', new Export({ manager, secret }));

    this.get('/', this.index.bind(this));
  }

  index (ctx) {
    const { name, version } = require('./package.json');
    ctx.body = { name, version };
  }
}

module.exports = App;
