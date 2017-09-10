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

  .get('/blog', blog.show)

  .get('/topic/new', topic.new)
  .get('/topic/:slug', topic.show)
  .get('/topic/:slug/edit', topic.edit)
  .put('/topic/:slug', topic.update)
  .delete('/topic/:slug', topic.delete)
  .post('/topic', topic.create)

  .get('/about', about.show);

module.exports = router;