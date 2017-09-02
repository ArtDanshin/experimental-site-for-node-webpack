const router    = require('koa-router')();

const main      = require('../app/controllers/application');
const portfolio = require('../app/controllers/portfolio');
const blog      = require('../app/controllers/blog');
const topic     = require('../app/controllers/topic');
const about     = require('../app/controllers/about');

router
  .get('/', main.home)

  .get('/portfolio', portfolio.show)
  .get('/portfolio/:slug', portfolio.item)
  .post('/portfolio/create', portfolio.create)
  .delete('/portfolio/destroy', portfolio.destroy)

  .get('/blog', blog.show)

  .get('/topic/:slug', topic.show)
  .post('/topic/create', topic.create)
  .delete('/topic/destroy', topic.destroy)

  .get('/about', about.show);

module.exports = router;