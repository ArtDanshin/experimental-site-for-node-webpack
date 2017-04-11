const main = require('../app/controllers/application');

module.exports = app => {
  app.get('/', main.home);
};