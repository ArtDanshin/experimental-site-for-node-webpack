const fs    = require('fs');
const path  = require('path');
const views = require('koa-views');

const manifest = JSON.parse(fs.readFileSync(path.join(appRoot, 'config', 'manifest.json'), 'utf8'));

module.exports = views(path.join(appRoot, 'app', 'views'), {
  extension: 'pug',
  options: {
    assets: manifest
  }
});
