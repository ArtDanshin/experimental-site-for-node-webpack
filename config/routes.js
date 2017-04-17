const main      = require('../app/controllers/application');
const portfolio = require('../app/controllers/portfolio');
const blog      = require('../app/controllers/blog');

module.exports = app => {
  app.get('/', main.home);
  app.get('/portfolio', portfolio.show);
  app.get('/blog', blog.show);
};