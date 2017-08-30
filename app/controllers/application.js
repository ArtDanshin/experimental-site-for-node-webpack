const homePresenter = require('../presenter/home');

exports.home = async ctx => {
  const homeData = await homePresenter();

  await ctx.render('home', homeData);
};
