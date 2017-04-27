const homePresenter = require('../presenter/home');

exports.home = (req, res) => {
  res.render('home', homePresenter())
}