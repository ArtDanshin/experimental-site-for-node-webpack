const fs      = require('fs');
const path    = require('path');
const Koa     = require('koa');
const views   = require('koa-views');
const serve   = require('koa-static');
const logger  = require('koa-logger');

const router = require('./config/routes.js');
const settings = JSON.parse(fs.readFileSync(path.join(__dirname, 'config', 'settings.json'), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'config', 'manifest.json'), 'utf8'));

global.appRoot = path.resolve(__dirname);

const app = new Koa();

app.use(views(__dirname + '/app/views', {
  extension: 'pug',
  options: {
    assets: manifest
  }
}));

app.use(logger());

app.use(serve(path.join(__dirname, 'public')));

app.use(router.routes());

app.listen(settings.server.port, () => {
  console.log('KoaJS запущен на http://localhost:' + settings.server.port + ' ; нажмите Ctrl + C для завершения');
});