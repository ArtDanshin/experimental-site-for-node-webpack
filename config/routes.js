const router    = require('koa-router')();

const main      = require('../app/controllers/application');
const portfolio = require('../app/controllers/portfolio');
const blog      = require('../app/controllers/blog');
const topic     = require('../app/controllers/topic');
const about     = require('../app/controllers/about');

router
  .get('/', main.home)

  .get('/portfolio', portfolio.show)
  .get('/portfolio/:item', portfolio.item)

  .get('/blog', blog.show)

  .get('/topic/:slug', topic.show)
  .post('/topic/add', topic.add)

  .get('/about', about.show);

module.exports = router;