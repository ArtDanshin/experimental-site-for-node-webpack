const homePresenter = require('../presenter/home');

exports.home = async ctx => {
  await ctx.render('home', homePresenter());
};
