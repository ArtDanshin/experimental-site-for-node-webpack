const main      = require('../app/controllers/application');
const portfolio = require('../app/controllers/portfolio');

module.exports = app => {
  app.get('/', main.home);
  app.get('/portfolio', portfolio.show);
};