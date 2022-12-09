const App = require('./app');
const http = require('http');
const config = require('./config');

const PORT = process.env.PORT || 3000;
const Logger = require('./lib/logger');
const logger = new Logger();
const conf = Object.assign(config, { logger });
const app = new App(conf);

const server = http.createServer(app.callback());
server.listen(PORT, () => console.info('Server listening at', PORT));
