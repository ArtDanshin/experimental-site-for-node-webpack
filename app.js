const fs       = require('fs');
const path     = require('path');
const Koa      = require('koa');
const mongoose = require('mongoose');

const router = require('./config/routes.js');
const middlewares = fs.readdirSync(path.join(__dirname, 'app', 'middlewares')).sort();
const settings = JSON.parse(fs.readFileSync(path.join(__dirname, 'config', 'settings.json'), 'utf8'));

global.appRoot = path.resolve(__dirname);

const app = new Koa();

middlewares.forEach(middleware => {
  app.use(require('./app/middlewares/' + middleware));
});

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test', {
  keepAlive: 1,
  poolSize: 5,
  useMongoClient: true
});

app.use(router.routes());

app.listen(settings.server.port, () => {
  console.log('KoaJS запущен на http://localhost:' + settings.server.port + ' ; нажмите Ctrl + C для завершения');
});