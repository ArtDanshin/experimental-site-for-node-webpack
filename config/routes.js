const main      = require('../app/controllers/application');
const portfolio = require('../app/controllers/portfolio');
const blog      = require('../app/controllers/blog');
const about     = require('../app/controllers/about');

module.exports = app => {
  app.get('/', main.home);
  app.get('/portfolio', portfolio.show);
  app.get('/blog', blog.show);
  app.get('/about', about.show);
};