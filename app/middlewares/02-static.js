const path  = require('path');
const serve = require('koa-static');

module.exports = serve(path.join(appRoot, 'public'));