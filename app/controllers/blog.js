const listModel = require('../models/list');

exports.show = async ctx => {
  await ctx.render('blog', listModel('blog_items'));
};
